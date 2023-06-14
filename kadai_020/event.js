const clickBtn = document.getElementById('btn');
const textChange = document.getElementById('text');

clickBtn.addEventListener('click', () => {
  setTimeout(() => {
    textChange.textContent="ボタンをクリックしました";
  }, 2000);
});