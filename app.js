//Build array of objects for questions and answers

let qAndA = {
  question: "Name one data type in JS",
  answerOne: "A: String",
  answerTwo: "B: section",
  answerThree: "C: not hotdog",
  answerFour: "D: block",
}

console.log(qAndA);
document.getElementById("questions-box").innerHTML = qAndA.question
document.getElementById("answerOne").innerHTML = qAndA.answerOne
document.getElementById("answerTwo").innerHTML = qAndA.answerTwo
document.getElementById("answerThree").innerHTML = qAndA.answerThree
document.getElementById("answerFour").innerHTML = qAndA.answerFour



