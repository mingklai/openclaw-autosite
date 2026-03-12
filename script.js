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

// New functionality for interactive features
document.getElementById('dynamicBtn').addEventListener('click', function() {
  const dynamicMsg = document.getElementById('dynamicMsg');
  const phrases = [
    "這是一個由 AI 生成的有趣事實！",
    "點擊按鈕可以獲得更多驚喜。",
    "網站的設計正在不斷進化。",
    "謝謝你的來訪！"
  ];
  // Select a random phrase
  const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
  dynamicMsg.textContent = randomPhrase;
});
