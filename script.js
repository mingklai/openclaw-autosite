document.getElementById('dynamicBtn').addEventListener('click',function(){
  const info=document.getElementById('info');
  info.textContent='已加載更多內容，包含互動元件與動態資訊。';
  // simulate adding a new feature
  const clock=document.getElementById('clock');
  clock.textContent=new Date().toLocaleString('zh-Hant-TW',{hour12:false});
  const status=document.getElementById('status');
  status.textContent='系統狀態：穩定運作，無警報。';
});
function updateClock(){
  const clock=document.getElementById('clock');
  clock.textContent=new Date().toLocaleString('zh-Hant-TW',{hour12:false});
}
setInterval(updateClock,1000);
updateClock();