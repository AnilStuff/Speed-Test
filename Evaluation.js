const inputBox = document.querySelector("#userEnteredText");
const digitalTimer = document.querySelector(".timeTaken");
const btnStartOver = document.querySelector(".startOver");
const questionText = document.querySelector("#inputText");
const charactersLeft = document.querySelector("#leftCharacters");

var interval;

// characters that are present in the question.

var timer = [0,0,0,0];
// Logic to put 0 infront of number

function leadingZero(time){
  if (time <= 9) {
    time = "0" + time;
  }
  return time;
}

function runTimer(){
  let time = leadingZero(timer[0]) + ":" + leadingZero(timer[1]) + ":" + leadingZero(timer[2]);
  digitalTimer.innerHTML = time;

  timer[3]++;

  timer[0] = Math.floor((timer[3]/100)/60);
  timer[1] = Math.floor(timer[3]/100) - (timer[0]*60);
  timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000));
}


function pressed(){

if(charLeftCount>0){
    charLeftCount --;
    charactersLeft.innerHTML = "Characters left " + charLeftCount
}


  if (inputBox.value.length === 0){
    interval =  setInterval(runTimer, 10);
  }

  if (charLeftCount == 0){
    clearInterval(interval);
  }
}

function start(){
  console.log("s");
  console.log(charLeftCount);

if (charLeftCount == 0) {
  if (questionText.innerHTML === inputBox.value) {
    inputBox.style.borderColor = "green";
  }else{
    inputBox.style.borderColor = "red";
  }
}

if (charLeftCount == 0){
  inputBox.readOnly = true;
}



}

function reset(){

  console.log("reset");
  clearInterval(interval);
  interval = null;
  timer = [0,0,0,0];

inputBox.value = "";
digitalTimer.innerHTML = "00:00:00";
inputBox.style.borderColor = "grey";
charLeftCount = questionText.innerHTML.length;
charactersLeft.innerHTML = "Characters left " + charLeftCount
// inputBox.maxlength="15";
inputBox.readOnly = false;

}

reset();

function onBackKeyDown() {
  charLeftCount ++;
  charactersLeft.innerHTML = "Characters left " + charLeftCount
}
//Register for notifications for keyboard
inputBox.addEventListener("keypress",pressed,false);
inputBox.addEventListener("keyup",start,false);
btnStartOver.addEventListener("click",reset,false);
