const correct = ["Answer1", "Answer2", "Answer3", "Answer4", "Answer5"];
const scoreArray = [false, false, false, false, false];

let scoreElement = document.querySelector("#score");
const message = document.querySelector(".message");
const button = document.querySelector(".btn")

function registerClick(question, answer) {
  scoreArray[question - 1] = answer === correct[question - 1] ? true : false;
}


  button.addEventListener("click", function calculateScore() {
    let score = 0;
    scoreArray.forEach((item) => {
      if (item === true) score++;
    });

    scoreElement.innerText = `Score: ${score}`;
    if (score === 5) {
      message.textContent = `Yay! You Scored 5/5 🎉🎉`;
      document.body.style.backgroundColor = "#d87093";
    } else if (score >= 3) {
      message.textContent = `You are an average 😀😀`;
    } else {
      message.textContent = `You are not good at anything 🤡🤡`;
    }
  });


