//All my informations for the quizz: questions, answers ...
const myQuestions = [
  //History
  {
    id: "1",
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
    id: "2",
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
    id: "3",
    question: "Which battle did François I win in 1515 ?",
    img: "Images/Marignan.jpg",
    answers: {
      a: "New York City",
      b: "Waterloo",
      c: "Marignan"
    },
    correctAnswer: "Marignan",
    info: "Marignan is a famous battle against Switzerland during Wars of Italy."
  },
  {
    id: "4",
    question: "When was Caesar killed ?",
    img: "Images/César.jpg",
    answers: {
      a: "44 BC",
      b: "Yesterday",
      c: "79 AD"
    },
    correctAnswer: "44 BC",
    info: "He was killed by his politicians and could never become emperor."
  },
  {
    id: "5",
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
    id: "6",
    question: "From whom were the Americas named ?",
    img: "./Images/amerigo.jpg",
    answers: {
      a: "Amerigo Vespucci",
      b: "Americano Rojas",
      c: "Amero Almeida"
    },
    correctAnswer: "Amerigo Vespucci",
    info: "He is considered the first European to understand that the lands discovered by Christopher Columbus are part of a new continent. In his honor, this new world was named 'America' ​​in a world map published in 1507 by a cartographer."
  },
  {
    id: "7",
    question: "Who was the first emperor of the Roman Empire ?",
    img: "./Images/empire.png",
    answers: {
      a: "Octave",
      b: "Auguste",
      c: "Caligula"
    },
    correctAnswer: "Auguste",
    info: "Octave became emperor of the Roman Empire in 27 BC and took the name of Auguste, which means 'consecrated by the omens'."
  },
  {
    id: "8",
    question: "How long did the Middle Age last",
    img: "./Images/ma.jpg",
    answers: {
      a: "2 centuries",
      b: "6 centuries",
      c: "10 centuries"
    },
    correctAnswer: "10 centuries",
    info: "The Middle Age lasts 10 centuries, between 476 (when the Occidental Roman Empire collapsed) and the XVth century (many dates can be taken to end the Middle Age, especially 1453 with the end of the 100 years War, the fall of the Oriental Roman Empire and the fall of the city Constantinople)."
  },
  {
    id: "9",
    question: "Who was the first to discover America ?",
    img: "./Images/ameriques.jpg",
    answers: {
      a: "Christopher Columbus",
      b: "Jacques Cartier",
      c: "The Vikings"
    },
    correctAnswer: "The Vikings",
    info: "The Vikings sailed in North America nearly 500 years before Christophus Columbus, but never settled there."
  },
  {
    id: "10",
    question: "What was the first name of the capital Istanbul ?",
    img: "./Images/istanbul.jpg",
    answers: {
      a: "Byzantium",
      b: "Lutetia",
      c: "Halicarnasse"
    },
    correctAnswer: "Byzantium",
    info: "Istanbul change its name two times. The first time was in 330 AD when the roman emperor Constantin I rebuilt the city and became the capital of the Oriental Roman Empire. Then in 1453, the city fall to the hands of Turkey and is only renamed in 1930 in Istanbul."
  },
  //Geography
  {
    id: "11",
    question: "What is the longest river in France?",
    img: "Images/Loire.jpg",
    answers: {
      a: "The Loire",
      b: "The Rhône",
      c: "My tears"
    },
    correctAnswer: "The Loire",
    info: "It measures 1 012 kilometers."
  },
  {
    id: "12",
    question: "What is the capital of Greenland ?",
    img: "Images/Nuuk.jpeg",
    answers: {
      a: "Illulissat",
      b: "Seal",
      c: "Nuuk"
    },
    correctAnswer: "Nuuk",
    info:"The capital, Nuuk, is situated west of Greenland and count 17 984 inhabitants."
  },
  {
    id: "13",
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
    id: "14",
    question: "Where can we find the most dangerous spider ?",
    img: "./Images/araignée.jpg",
    answers: {
      a: "Under my bed",
      b: "Brazil",
      c: "Kenya"
    },
    correctAnswer: "Brazil",
    info: "They are called Brazilian wandering spiders, armed spiders or banana spiders and it's one of the most venemous spiders on Earth, although antivenin makes death unlikely"
  },
  {
    id: "15",
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
  {
    id: "16",
    question: "Which country is the 5th largest of the world ?",
    img: "./Images/5.jpg",
    answers: {
      a: "China",
      b: "Brazil",
      c: "Luxembourg"
    },
    correctAnswer: "Brazil",
    info: "Brazil stretches over 8 515 770 km²."
  },
  {
    id: "17",
    question: "Which country is the smallest of the world ?",
    img: "./Images/small.jpg",
    answers: {
      a: "Vatican",
      b: "Monaco",
      c: "Gibraltar"
    },
    correctAnswer: "Vatican",
    info: "City State in the city of Rome, this state which is in full heart of Rome extends on only 0.44 km²."
  },
  {
    id: "18",
    question: "Which country has the largest maritime domain in the world?",
    img: "./Images/cost.jpg",
    answers: {
      a: "France",
      b: "Canada",
      c: "United States"
    },
    correctAnswer: "United States",
    info: "United States has 11,3 millions km² of maritime domain. Just behind you will find France with 10,8 millions km² of maritime domain, thanks to the French Polynesia."
  },
  {
    id: "19",
    question: "What do Artic and Antarctic mean ?",
    img: "./Images/arctic-antarctic.jpg",
    answers: {
      a: "Seal and penguins",
      b: "North and South",
      c: "Bear and no bear"
    },
    correctAnswer: "Bear and no bear",
    info: "The word 'Arctic' comes from the Greek 'arktikos' = 'near the bear, northern'. You can find bears in the Arctic but not in Antarctic."
  },
  {
    id: "20",
    question: "How many time zones are there ?",
    img: "./Images/world.jpg",
    answers: {
      a: "24",
      b: "25",
      c: "23"
    },
    correctAnswer: "24",
    info: "If every time zone were one hour apart, there would be a total of 24 across the world. However, some of them have 30 and 45 minutes offsets, a situation which makes the total number in the world much higher."
  },
];

//Variables that I need for the code
var qIndex = Number(window.localStorage.getItem("qIndex")) || 0;
var score = 0;
var turn =0;
var allQuestion = myQuestions.length;
var intervalId = 0;
var currentTime = 1;
var time = document.getElementById("time");
var totalTime = 0;

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
  startClick();
  if(mode === "init") qIndex = 0;
    let q = myQuestions[qIndex].question;
    var image = myQuestions[qIndex].img;
    let answerA = myQuestions[qIndex].answers.a;
    let answerB = myQuestions[qIndex].answers.b;
    let answerC = myQuestions[qIndex].answers.c;
    let info = myQuestions[qIndex].info;

    document.getElementById("test").innerHTML = ` "${q}" `;
    document.querySelector(".headline :last-child").innerHTML += `<div class="image"><img class="image_container" src="${image}"></div>`
    document.getElementById("A").innerHTML = `${answerA}`;
    document.getElementById("B").innerHTML = `${answerB}`;
    document.getElementById("C").innerHTML = `${answerC}`;
  

//check if the answer is correct or not, stop the time and restart the current time.
  const goodAnswer = document.querySelectorAll(".btn_answer").forEach((proposition)=>{
    proposition.onclick = function(e){
      let propositions = e.target;
      if (myQuestions[qIndex].correctAnswer === propositions.innerHTML){
        score++;
        document.getElementById("score").innerHTML = `Score : ${score}/${allQuestion}`;
        propositions.classList.add("green");
        propositions.classList.remove("red");
        document.querySelector(".headline :last-child").innerHTML = `<div class="image"><img class="image_container" src="${image}"><br><i class="info">"${info}"</i></div>`;
        clearInterval(intervalId);
        currentTime=1;
      }
      else {
        document.getElementById("score").innerHTML = `Score : ${score}/${allQuestion}`;
        propositions.classList.add("red");
        propositions.classList.remove("green");
        document.querySelector(".headline :last-child").innerHTML = `<div class="image"><img class="image_container" src="${image}"><br><i class="info">"${info}"</i></div>`;
        clearInterval(intervalId);
        currentTime=1;
      }
    }
  });
}

//function that will load the page to the end of the game
function endGame() {
  localStorage.setItem("qIndex", 0);
  localStorage.setItem("score", score);
  localStorage.setItem("totalTime", totalTime)
  window.location.href = "./endgame.html";
}

//function that start the time and end it if the time is over
function startClick() {
  intervalId=setInterval(()=>{
    if (currentTime<4){
      time.innerHTML= currentTime;
      time.classList.add("ok");
      time.classList.remove("danger");
      time.classList.remove("warning");
      console.log(currentTime);
    }
    else if (currentTime<7 && currentTime>3){
      time.innerHTML= currentTime;
      time.classList.add("warning");
      time.classList.remove("danger");
      time.classList.remove("ok");
      console.log(currentTime);
    }
    else if (currentTime<11 && currentTime>6){
      time.innerHTML= currentTime;
      time.classList.add("danger");
      time.classList.remove("warning");
      time.classList.remove("ok");
      console.log(currentTime);
    }
    else {stopClick()}
    currentTime++
    totalTime+=1;
  },1000);
  return currentTime;
}

//function that stop the time, restart the current time and if the time is over, go to the next question
function stopClick(){
  clearInterval(intervalId);
  currentTime= 1;
  time.innerHTML= currentTime;
  time.classList.add("ok");
  time.classList.remove("danger");
  time.classList.remove("warning");
  next.click();
}

//all the action when you click on the next button
const next = document.querySelector(".btn_next");
next.onclick = () => {
  turn++;
  if(turn>19) {
    endGame();
    clearInterval(intervalId);
  }
  else {
    prepareNext();
    startGame();
  }
};

export default score;
export {time}