let thisScore = localStorage.getItem("score");
document.querySelector(".score").innerHTML = `Score : ${thisScore}/10`;

var gifs = [
  {
    id: "0",
    name: "youshallnotpass",
    link: "https://media.giphy.com/media/njYrp176NQsHS/giphy.gif",
    answer: "Come back to school !"
  },
  {
    id: "1",
    name: "gollumscream",
    link: "https://media.giphy.com/media/ckvuK4mlUuohi/giphy.gif",
    answer: "This is embarassing ..."
  },
  {
    id: "2",
    name: "samdrawning",
    link: "https://media.giphy.com/media/JDskI2kdiuvF6/giphy.gif",
    answer: "You still suck ...."
  },
  {
    id: "3",
    name: "gandalfaragorn",
    link: "https://media.giphy.com/media/FjkRzWWLic9eo/giphy.gif",
    answer: "My little sister can do better than you, and she is 5."
  },
  {
    id: "4",
    name: "gimlihope",
    link: "https://media.giphy.com/media/O8fQM2yVGnbva/giphy.gif",
    answer: "Come on ! You can do better !"
  },
  {
    id: "5",
    name: "frodonlost",
    link: "https://media.giphy.com/media/XWt4WxJQEo5kk/giphy.gif",
    answer: "Half the points, keep going !"
  },
  {
    id: "6",
    name: "legolasaragorn",
    link: "https://media.giphy.com/media/1O3xRyXTEorZK/giphy.gif",
    answer: "That's alright, but I'm sure you can do better !"
  },
  {
    id: "7",
    name: "gollum",
    link: "https://media.giphy.com/media/Cr7yTbjNuY27C/giphy.gif",
    answer: "Yes, you were almost a very good student."
  },
  {
    id: "8",
    name: "frodonhappy",
    link: "https://media.giphy.com/media/tTC52LRfnUgxO/giphy.gif",
    answer: "So close to the goal !"
  },
  {
    id: "9",
    name: "theshire",
    link: "https://media.giphy.com/media/zGnnFpOB1OjMQ/giphy.gif",
    answer: "I see, you were listenning in class (and not talking to your classmate)."
  },
  {
    id: "10",
    name: "aragornbow",
    link: "https://media.giphy.com/media/zFll0lS6DvyIo/giphy.gif",
    answer: "Perfect !!!!"
  },
];

document.querySelector(".gif").innerHTML = `<img src="${
  gifs[thisScore].link
}"/>`;
document.querySelector(".answer").innerHTML =`${gifs[thisScore].answer}`
