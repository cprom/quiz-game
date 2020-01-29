//Build array of objects for questions and answers

let qAndA = [
  {
    question: "Name one data type in JS",
    a: "String",
    b: "Sections",
    c: "not hotdog",
    d: "block",
    correctAnswer: 'a'
  },

  {
    question: "What is used to declare a variable?",
    a: "prinf",
    b: "let",
    c: "<h1>",
    d: "css",
    CorrectAnswer: 'b'
  },

]

let lastQuestion = qAndA.length - 1
let arrQuestion = 0;

function renderQuestion() {
  let q = question[arrQuestion]
  question.innerHTML = "<p>" + q.question + "</p>"
  a.innerHTML = q.a
  b.innerHTML = q.b
  b.innerHTML = q.c
  b.innerHTML = q.d
}

