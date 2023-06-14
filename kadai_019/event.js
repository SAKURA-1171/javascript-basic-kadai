const clickBtn = document.getElementById('btn');
const textChange = document.getElementById('text');

clickBtn.addEventListener('click', () => {
  textChange.textContent="ボタンをクリックしました";
});