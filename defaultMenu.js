// ============================================================================
// 🍱 雲端點餐與 POS 系統・獨立公版範本菜單檔 (defaultMenu.js)
// 💡 部署新合作店家時，請將此檔案與 admin.html 放在同一個目錄下。
//    您也可以直接修改下方的 categories 與 items，客製化不同業態的預設菜單！
// ============================================================================

const defaultMenuCategories = [
  { name: "招牌麵類", sort_order: 1, is_active: true },
  { name: "飯類/炒飯", sort_order: 2, is_active: true },
  { name: "手工水餃", sort_order: 3, is_active: true },
  { name: "湯品/小菜", sort_order: 4, is_active: true },
  { name: "清涼冷飲", sort_order: 5, is_active: true }
];

const noodleAddons = [
  { name: "加麵 (+15元)", price: 15 },
  { name: "不要蔥", price: 0 },
  { name: "不要酸菜", price: 0 },
  { name: "小辣", price: 0 }
];

const riceAddons = [
  { name: "加飯 (+10元)", price: 10 },
  { name: "不要蔥", price: 0 },
  { name: "加辣", price: 0 }
];

const drinkAddons = [
  { name: "去冰", price: 0 },
  { name: "正常冰", price: 0 }
];

const defaultMenuItems = [
  { category_name: "招牌麵類", name: "川味紅燒牛肉麵", type: "size", price_small: 110, price_large: 130, addons: noodleAddons, is_available: true },
  { category_name: "招牌麵類", name: "牛肉乾拌麵", type: "size", price_small: 100, price_large: 120, addons: noodleAddons, is_available: true },
  { category_name: "招牌麵類", name: "牛肉湯麵", type: "size", price_small: 70, price_large: 85, addons: noodleAddons, is_available: true },
  { category_name: "招牌麵類", name: "古早味陽春乾麵", type: "size", price_small: 45, price_large: 60, addons: noodleAddons, is_available: true },
  { category_name: "招牌麵類", name: "香濃麻醬乾麵", type: "size", price_small: 50, price_large: 65, addons: noodleAddons, is_available: true },
  { category_name: "飯類/炒飯", name: "黃金肉絲蛋炒飯", type: "fixed", price: 75, addons: riceAddons, is_available: true },
  { category_name: "飯類/炒飯", name: "沙茶牛肉炒飯", type: "fixed", price: 95, addons: riceAddons, is_available: true },
  { category_name: "飯類/炒飯", name: "傳統滷肉燥飯", type: "size", price_small: 35, price_large: 50, addons: [{ name: "加滷蛋 (+15元)", price: 15 }], is_available: true },
  { category_name: "手工水餃", name: "高麗菜鮮肉水餃", type: "dumpling", price: 6, min_qty: 10, addons: [{ name: "加蒜泥", price: 0 }, { name: "加辣油", price: 0 }], is_available: true },
  { category_name: "手工水餃", name: "韭菜鮮肉水餃", type: "dumpling", price: 6, min_qty: 10, addons: [{ name: "加蒜泥", price: 0 }, { name: "加辣油", price: 0 }], is_available: true },
  { category_name: "湯品/小菜", name: "紅燒牛肉湯", type: "size", price_small: 80, price_large: 100, addons: [{ name: "不要蔥", price: 0 }], is_available: true },
  { category_name: "湯品/小菜", name: "鮮肉餛飩湯", type: "fixed", price: 45, addons: [{ name: "不要蔥", price: 0 }], is_available: true },
  { category_name: "湯品/小菜", name: "綜合滷味拼盤 (豆干/海帶/滷蛋)", type: "fixed", price: 60, addons: [{ name: "加辣", price: 0 }, { name: "不要蔥", price: 0 }], is_available: true },
  { category_name: "清涼冷飲", name: "古早味冰紅茶", type: "fixed", price: 25, addons: drinkAddons, is_available: true },
  { category_name: "清涼冷飲", name: "手工熬煮冬瓜茶", type: "fixed", price: 25, addons: drinkAddons, is_available: true },
  { category_name: "清涼冷飲", name: "高山無糖冷泡綠茶", type: "fixed", price: 30, addons: drinkAddons, is_available: true },
  { category_name: "清涼冷飲", name: "烏梅酸梅湯", type: "fixed", price: 35, addons: drinkAddons, is_available: true },
  { category_name: "清涼冷飲", name: "可口可樂 / 雪碧 (罐裝)", type: "fixed", price: 30, addons: [{ name: "可樂", price: 0 }, { name: "雪碧", price: 0 }], is_available: true }
];

window.DEFAULT_MENU_TEMPLATE = {
  categories: defaultMenuCategories,
  items: defaultMenuItems
};