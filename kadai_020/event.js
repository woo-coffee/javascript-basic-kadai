//画面から取得したHTML要素が定数に代入されている
const btn = document.getElementById('btn')

//ボタンをクリックした際に正しく文字変更がされている
btn.addEventListener('click',() => {
    console.log('ボタンをクリックしました');
});