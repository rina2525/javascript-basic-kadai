const pushBtn = document.getElementById('btn');
const changeText = document.getElementById('text');

btn.addEventListener('click',() =>{
setTimeout(() => {
  changeText.textContent = 'ボタンをクリックしました'; 
}, 2000);
});