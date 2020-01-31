let start = document.getElementById("start-btn");
let score = 0;
let currentQuestionIndex;


//Build array of objects for questions and answers

let qAndA = [
  {
    question: 'Name one data type in JS',
    answers: [
      { text: 'String', correct: true },
      { text: 'Const', correct: false },
      { text: 'data', correct: false }
    ]
  },
  {
    question: 'What is used to declare a variable?',
    answers: [
      { text: '<h1>, <h2>, class', correct: false },
      { text: 'let, var, const', correct: true },
      { text: 'data, function(), id', correct: false }
    ]
  },
  {
    question: 'Name one data type in JS',
    answers: [
      { text: 'String', correct: true },
      { text: 'Const', correct: false },
      { text: 'data', correct: false }
    ]
  },
  {
    question: 'How does a for loop start?',
    answers: [
      { text: 'for (i = 0; i < 10; i++)', correct: true },
      { text: 'for i = 0; i < 10; i++', correct: false },
      { text: 'for (i = 0: i < 10: i++)', correct: false }
    ]
  },


];

//add event to hide and unhide elememts when "start quiz" is pressed
document.getElementById("start-btn").addEventListener('click', startQuiz);

function startQuiz() {

  document.getElementById("start-btn").classList.add('hide');
  question.classList.remove('hide');
  answerA.classList.remove('hide');
  answerB.classList.remove('hide');
  answerC.classList.remove('hide');
  currentQuestionIndex = 0;
  setNextQuestion()
  startTimer()
}


function setNextQuestion() {
  resetAnswers()
  showQuestion(qAndA[currentQuestionIndex])

}
//display questions on to page
function showQuestion(qAndA) {
  document.getElementById('question').innerText = qAndA.question;
  qAndA.answers.forEach(answer => {
    let button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('answer');
    if (answer.correct) {
      button.dataset.correct = answer.correct

    }
    button.addEventListener('click', selectAnswer)
    document.getElementById('answers').appendChild(button)
    console.log('ping')
  })
}
function resetAnswers() {
  answerA.classList.add('hide')
  answerB.classList.add('hide')
  answerC.classList.add('hide')
}

function selectAnswer(e) {
  let selectedBtn = e.target
  let correct = selectedBtn.dataset.correct

}



//countdown timer

function startTimer(i, callback) {
  callback = callback || function () { };
  var int = setInterval(function () {
    document.getElementById("countdown-time").innerHTML = "Time Left: " + i;
    i-- || (clearInterval(int), callback());
  }, 1000);
}
document.getElementById("start-btn").addEventListener('click', function () {
  startTimer(100, function () {
    alert('Game Over')
  });
});