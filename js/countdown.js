
const countdownEl = document.getElementById("countdown");
const boxEl = document.getElementById("countdownBox") || countdownEl.parentElement;
boxEl.classList.add('red');

const miningStart = new Date("2025-07-01T18:00:00");

function updateCountdown(){
  const now = new Date();
  let diff = miningStart - now;
  if(diff>0){
    const d=Math.floor(diff/86400000), h=Math.floor(diff/3600000)%24,
          m=Math.floor(diff/60000)%60, s=Math.floor(diff/1000)%60;
    countdownEl.textContent = `${d} d : ${h} h : ${m} m : ${s} s`;
    return;
  }
  countdownEl.textContent = "Mining has started!";
  boxEl.classList.remove('red'); boxEl.classList.add('green');
  clearInterval(timer);

  let mined=0;
  const watcher=setInterval(()=>{
    mined+=5000;
    if(mined>=1000000){
       boxEl.classList.remove('green'); boxEl.classList.add('red');
       clearInterval(watcher);
    }
  },60000);
}
const timer=setInterval(updateCountdown,1000);
updateCountdown();
