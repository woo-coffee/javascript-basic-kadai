//画面から取得したHTML要素が定数に代入されている
const text = document.getElementById('text')
const btn = document.getElementById('btn')


//ボタンをクリックした際に正しく文字変更がされている
btn.addEventListener('click',() => {
    const text = document.createElement('h2');
    text.textContent('ボタンをクリックしました');
});