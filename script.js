document.getElementById('greetBtn').addEventListener('click',function(){
  const msg=document.getElementById('msg');
  msg.textContent='嗨！這是你個人化網站的問候。';
});

// 顯示當前時間
function updateClock(){
  const clock=document.getElementById('clock');
  const now=new Date();
  clock.textContent=now.toLocaleString('zh-Hant-TW', {hour12:false});
}
setInterval(updateClock,1000);
updateClock();
