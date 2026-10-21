// ============================================================================
// 📦 雲端點餐與 POS 系統・獨立 Firebase 設定檔 (firebaseConfig.js)
// 💡 部署新合作店家時，只需將 Firebase 控制台提供的設定替換於此檔案即可，
//    完全不需要修改 index.html 與 admin.html！
// ============================================================================

const firebaseConfig = {
  apiKey: "AIzaSyA_ZuKVzdD-gf0z9N4ASVda0-K3nZVsdBw",
  authDomain: "eat-order-test.firebaseapp.com",
  projectId: "eat-order-test",
  storageBucket: "eat-order-test.firebasestorage.app",
  messagingSenderId: "958925276830",
  appId: "1:958925276830:web:4d87b1e24ca03c8e0c9d8f"
};


window.FIREBASE_CONFIG = firebaseConfig;
