let start = document.getElementById("start")
let question = document.getElementById("question")
let answerA = document.getElementById("answerA")
let answerB = document.getElementById("answerB")
let answerC = document.getElementById("answerC")
let quiz = document.getElementById("quiz")

//Build array of objects for questions and answers

let qAndA = [
  {
    question: "Name one data type in JS",
    answerA: "String",
    answerB: "Sections",
    answerC: "not hotdog",
    correctAnswer: 'a'
  },

  {
    question: "What is used to declare a variable?",
    answerA: "prinf",
    answerB: "let",
    answerC: "<h1>",
    correctAnswer: 'b'
  },

]

let lastQuestion = qAndA.length - 1
let nextQuestion = 0;

function renderQuestion() {
  let q = qAndA[nextQuestion]
  question.innerHTML = "<p>" + q.question + "</p>"
  answerA.innerHTML = q.answerA
  answerB.innerHTML = q.answerB
  answerC.innerHTML = q.answerC
  nextQuestion = 0
  nextQuestion++


}

start.style.display = "none"
renderQuestion()
quiz.style.display = "block"