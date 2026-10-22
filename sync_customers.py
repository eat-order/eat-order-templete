
import json
import os
import subprocess
import tempfile
from pathlib import Path

FILES = ("index.html", "admin.html")
TEMPLATE_REPO = "eat-order/eat-order-templete"


def run(*args, cwd=None, check=True):
    return subprocess.run(
        args,
        cwd=cwd,
        check=check,
        text=True,
        capture_output=True
    )


def main():
    template = Path.cwd()
    customer = template.parent / "customer"

    customer_repo = os.environ.get("CUSTOMER_REPO")
    if not customer_repo:
        raise RuntimeError("缺少 CUSTOMER_REPO 環境變數")

    config = json.loads(
        (template / "customers.json").read_text(encoding="utf-8")
    )

    if customer_repo not in config["customers"]:
        raise RuntimeError(f"客戶不在清單內：{customer_repo}")

    state_path = customer / ".sync-state.json"
    state = json.loads(state_path.read_text(encoding="utf-8"))

    if state["source_repository"] != TEMPLATE_REPO:
        raise RuntimeError("同步來源不正確")

    if state["source_branch"] != "main":
        raise RuntimeError("同步來源分支不正確")

    if set(state["sync_files"]) != set(FILES):
        raise RuntimeError("同步檔案清單不正確")

    if set(FILES) & set(state["protected_files"]):
        raise RuntimeError("同步檔案包含受保護檔案")

    old_commit = state["last_synced_commit"]
    new_commit = run(
        "git", "rev-parse", "HEAD", cwd=template
    ).stdout.strip()

    changes = {}

    for filename in FILES:
        base = run(
            "git", "show", f"{old_commit}:{filename}",
            cwd=template
        ).stdout

        incoming = (template / filename).read_text(
            encoding="utf-8"
        )

        current = (customer / filename).read_text(
            encoding="utf-8"
        )

        with tempfile.TemporaryDirectory() as folder:
            folder = Path(folder)
            ours = folder / "ours"
            ancestor = folder / "base"
            theirs = folder / "theirs"

            ours.write_text(current, encoding="utf-8")
            ancestor.write_text(base, encoding="utf-8")
            theirs.write_text(incoming, encoding="utf-8")

            result = run(
                "git", "merge-file", "-p",
                str(ours), str(ancestor), str(theirs),
                check=False
            )

            if result.returncode != 0:
                raise RuntimeError(
                    f"{customer_repo} 的 {filename} "
                    "合併衝突，已停止同步"
                )

            changes[filename] = result.stdout

    for filename, content in changes.items():
        (customer / filename).write_text(
            content, encoding="utf-8"
        )

    state["last_synced_commit"] = new_commit

    state_path.write_text(
        json.dumps(state, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8"
    )

    print(f"{customer_repo} 合併完成，等待建立 PR")


if __name__ == "__main__":
    main()
