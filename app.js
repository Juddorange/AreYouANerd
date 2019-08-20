//All my informations for the quizz: questions, answers ...
const myQuestions = [
  {
    question: "Who was Tutankhamun ?",
    img: "Images/Toutankhamon.jpg",
    answers: {
      a: "An Emperor",
      b: "A Pharaoh",
      c: "A President"
    },
    correctAnswer: "A Pharaoh",
    info: "Tutankhamun died at the age of 19."
  },
  {
    question: "When did the massacre of St. Bartholomew occur ? ",
    img: "Images/Saint-Barthélémy.jpg",
    answers: {
      a: "24th august 1969",
      b: "24th august 500BD",
      c: "24th august 1572"
    },
    correctAnswer: "24th august 1572",
    info: "This massacre takes place between christians and protestants."
  },
  {
    question: "Which battle did François I win in 1515 ?",
    img: "Images/Marignan.jpg",
    answers: {
      a: "New York City",
      b: "Waterloo",
      c: "Marignan"
    },
    correctAnswer: "Marignan",
    info: "It's a famous battle against Switzerland during Wars of Italy."
  },
  {
    question: "When was Caesar killed ?",
    img: "Images/César.jpg",
    answers: {
      a: "33 BC",
      b: "Yesterday",
      c: "79 AD"
    },
    correctAnswer: "33 BC",
    info: "He was killed by his politicians and could never become emperor."
  },
  {
    question: "Who was the pope that launched the first crusade ?",
    img: "./Images/Croisade.jpg",
    answers: {
      a: "Pie I",
      b: "Urbain II",
      c: "Fabien, my great great great great grandfather"
    },
    correctAnswer: "Urbain II",
    info: "The first crusade took place following, among others, the refusal in 1078 of the Turks to give free passage to Christian pilgrims to Jerusalem. This crusade ends with the capture of Jerusalem and the creation of the Christian kingdom of Jerusalem."
  },
  {
    question: "What is the longest river in France?",
    img: "Images/Loire.jpg",
    answers: {
      a: "The Loire",
      b: "The Rhône",
      c: "My tears"
    },
    correctAnswer: "The Loire",
    info: "The Loire measure 1 012 kilometers."
  },
  {
    question: "What is the capital of Greenland ?",
    img: "Images/Nuuk.jpeg",
    answers: {
      a: "Illulissat",
      b: "Seal",
      c: "Nuuk"
    },
    correctAnswer: "Nuuk",
    info:"Nuuk is situated west of Greenland and count 17 984 inhabitants."
  },
  {
    question: "Which country has the greatest population ?",
    img: "Images/inde.jpg",
    answers: {
      a: "India",
      b: "Bellegarde-en-Marche, a village in the Creuse",
      c: "China"
    },
    correctAnswer: "India",
    info:"There is 1 billion and 300 millions of inhabitants in India."
  },
  {
    question: "Where can we find the most dangerous spider ?",
    img: "Images/araignée.jpg",
    answers: {
      a: "Under my bed",
      b: "Brazil",
      c: "Kenya"
    },
    correctAnswer: "Brazil",
    info: "They are called Brazilian wandering spiders, armed spiders or banana spiders and it's one of the most venemous spiders on Earth, although antivenin makes death unlikely"
  },
  {
    question: "How much does the Marianne pit measure?",
    img: "Images/marianne.jpg",
    answers: {
      a: "120 meters",
      b: "15 000 kilometers",
      c: "11 kilometers"
    },
    correctAnswer: "11 kilometers",
    info:"The Marianne pit is the deepest oceanic pit and the deepest place of the Earth's crust. It's situated in the North-West of the Pacific ocean, near the Marianne's Island."
  },
];


//Variables that I need for the code
var qIndex = Number(window.localStorage.getItem("qIndex")) || 0;
var score = 0;
var turn =0;
var allQuestion = myQuestions.length;
var start = document.querySelectorAll(".btn_answer");
var intervalId = 0;
var currentTime = 0;


if (qIndex) startGame();
else startGame("init");

//function that remove the class from the answer button when you click on the next question button
function prepareNext() {
  const red =  document.querySelector(".btn.red");
  const green =  document.querySelector(".btn.green");
  if (red) red.classList.remove("red");
  if (green) green.classList.remove("green");
  qIndex++;
  window.localStorage.setItem("qIndex", qIndex);
}

//functions that start the game. It will print the questions + answer
function startGame(mode){
  if(mode === "init") qIndex = 0;
    let q = myQuestions[qIndex].question;
    var image = myQuestions[qIndex].img;
    let answerA = myQuestions[qIndex].answers.a;
    let answerB = myQuestions[qIndex].answers.b;
    let answerC = myQuestions[qIndex].answers.c;
    let info = myQuestions[qIndex].info;

    document.getElementById("test").innerHTML = ` "${q}" `;
    document.getElementById("test").innerHTML += `<div class="image"><img src="${image}"></div>`
    document.getElementById("A").innerHTML = `${answerA}`;
    document.getElementById("B").innerHTML = `${answerB}`;
    document.getElementById("C").innerHTML = `${answerC}`;
  

//check if the answer is correct or not, stop the time and restart the current time.
  const goodAnswer = document.querySelectorAll(".btn_answer").forEach((proposition)=>{
    proposition.onclick = function(e){
      let propositions = e.target;
      if (myQuestions[qIndex].correctAnswer === propositions.innerHTML){
        score++;
        document.getElementById("score").innerHTML = `SCORE : ${score}/${allQuestion}`;
        propositions.classList.add("green");
        propositions.classList.remove("red");
        document.getElementById("test").innerHTML = `<img src="${image}"><br>"<i class="info">${info}</i>"`;
        clearInterval(intervalId);
        currentTime=0;
      }
      else {
        propositions.classList.add("red");
        propositions.classList.remove("green");
        document.getElementById("test").innerHTML = `<img src="${image}"><br>"<i class="info">${info}</i>"`;
        clearInterval(intervalId);
        currentTime=0;
      }
    }
  });
}

//function that will load the page to the end of the game
function endGame() {
  localStorage.setItem("qIndex", 0);
  localStorage.setItem("score", score);
  window.location.href = "./endgame.html";
}

//function that stop the time, restart the current time and if the time is over, pass to the next question
function stopClick(){
  clearInterval(intervalId);
  currentTime= 0;
  next.click();
}

//function that start the time and end it if the time is over
function startClick() {
  intervalId=setInterval(()=>{
    if (currentTime<10){
    currentTime++;
    console.log(currentTime);
    }
    else {stopClick()}
  },1000);
  return currentTime;
}

//all the action when you click on the next button
const next = document.querySelector(".btn_next");
next.onclick = () => {
  turn++;
  if(turn>9) endGame();
  else {
  prepareNext();
  startGame();
  startClick();
  }
};

export default score;