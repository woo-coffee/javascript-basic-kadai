const today = new Date();

const year = today.getFullYear();
const month = today.getMonth() + 1; // 月は0始まりなので+1する
const day = today.getDate();

console.log(`${year}年${month}月${day}日 `);
