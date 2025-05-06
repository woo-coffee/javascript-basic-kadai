//画面から取得したHTML要素が定数に代入されている
const text = document.getElementById('text')
const btn = document.getElementById('btn')

// 2秒（2000ミリ秒）の待ち時間を設定し、非同期処理を実行する
setTimeout (() =>{
    btn.addEventListener('click',() => {
        text.textContent = 'ボタンをクリックしました';
},2000);});

//ボタンをクリックした際に正しく文字変更がされている
// btn.addEventListener('click',() => {
//     text.textContent = 'ボタンをクリックしました';
// });