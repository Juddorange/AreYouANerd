var intervalId = 0;
var currentTime = 0;

//function that start the time and end it if the time is over
function startBtn() {
  intervalId=setInterval(()=>{
    if (currentTime<10){
    currentTime++;
    console.log(currentTime);
    }
    else {stopBtn()}
  },1000);
  return currentTime;
}

function stopBtn(){
  clearInterval(intervalId);
  currentTime= 0;
  next.click();
}

const start = document.querySelector(".btn-start");
start.onclick = () => {
startBtn();
}

const next = document.querySelector(".btn_next");
next.onclick = () => {
  turn++;
  if(turn>9) {
    endGame();
    clearInterval(intervalId);
  }
  else {
  prepareNext();
  startGame();
  startClick();
  }
};