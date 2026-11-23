let score = Number(localStorage.getItem("quizScore")) || 0;

let messages = [
    "Perfect Score! Amazing job!",
    "Great job! You Have EBK!",
    "Good try! Keep Trying!"
];

function startQuiz() {
    score = 0;
    localStorage.setItem("quizScore", 0);

    alert("The quiz is starting!");

    setTimeout(function () {
        console.log("Good luck!");
    }, 1000);
}

function correctAnswer() {
    score++;
    localStorage.setItem("quizScore", score);
}

function wrongAnswer() {
    localStorage.setItem("quizScore", score);
}

function showMessage(text) {
    document.getElementById("message").innerHTML = text;
}

if (document.getElementById("score")) {

    document.getElementById("score").innerHTML =
        "Your Score: " + score + "/5";

    if (score === 5) {
        showMessage(messages[0]);
    }

    else if (score >= 3) {
        showMessage(messages[1]);
    }

    else {
        showMessage(messages[2]);
    }

    document.getElementById("score").style.color = "blue";

    for (let i = 0; i < 1; i++) {
        console.log("Quiz Complete");
    }

    let count = 0;
    while (count < 1) {
        console.log("Finished");
        count++;
    }
}

function playAgain() {
    localStorage.setItem("quizScore", 0);
    window.location.href = "index.html";
}

if (document.getElementById("playAgainBtn")) {
    document
        .getElementById("playAgainBtn")
        .addEventListener("click", playAgain);
}