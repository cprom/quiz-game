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
  }


];

//add event to hide and unhide elememts when "start quiz" is pressed
start.addEventListener('click', startQuiz);

function startQuiz() {



  start.classList.add('hide');
  question.classList.remove('hide');
  answerA.classList.remove('hide');
  answerB.classList.remove('hide');
  answerC.classList.remove('hide');
  currentQuestionIndex = 0;
  setNextQuestion()
  startTimer()
}


function setNextQuestion() {
  showQuestion(qAndA[currentQuestionIndex])

}

function showQuestion(qAndA) {
  document.getElementById('question').innerText = qAndA.question;
  qAndA.answers.forEach(answer => {
    let button = document.createElement('button');
    button.innerText = qAndA.answers.text;
    button.classList.add('answer');
    if (answer.correct) {
      button.dataset.correct = answers.correct

    }
    button.addEventListener('click', selectAnswer)
    document.getElementById('answers').appendChild(button)

  })

  function selectAnswer(e) {

  }
}




function selectAnswer() {

}

function startTimer(i, callback) {
  callback = callback || function () { };
  var int = setInterval(function () {
    document.getElementById("countdown-time").innerHTML = "Time Left: " + i;
    i-- || (clearInterval(int), callback());
  }, 1000);
}
document.getElementById("start-btn").addEventListener('click', function () {
  startTimer(5, function () {
    alert('Game Over')
  });
});