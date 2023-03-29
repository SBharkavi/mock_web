

var quizData = [
  {
    question: "Ques 1: Which of the keyword is used to define the variable in the javascript?",
    a: "var",
    b: "let",
    c: "Both A & B",
    d: "None of the above",
    correct: "c",
  },
  {
    question: "Ques 2: Which of the following is not JavaScript Data Types?",
    a: "Undefined",
    b: "Number",
    c: "Boolean",
    d: "Float",
    correct: "d",
  },
  {
    question: "Ques 3: Which company developed JavaScript?",
    a: " Netscape",
    b: " Bell Labs",
    c: " Sun Microsystems",
    d: " IBM",
    correct: "a",
  },
  {
    question: "Ques 4: Inside which HTML element do we put the JavaScript?",
    a: "<script>",
    b: "<head>",
    c: "<meta>",
    d: "<style>",
    correct: "a",
  },
  {
    question: "Ques 5: Among the following, which one is a ternary operator in JavaScript?",
    a: "#",
    b: "::",
    c: "&:",
    d: "?:",
    correct: "d",
  },


];

var answerEls = document.querySelectorAll(".answer");
var aText = document.getElementById("aText");
var bText = document.getElementById("bText");
var cText = document.getElementById("cText");
var dText = document.getElementById("dText");
var questionEl = document.getElementById("question");
var submitBtn = document.getElementById("submit");
var replayBtn = document.getElementById("replay");
var nextBtn = document.getElementById("next");




var currentQuiz = 0;
var score = 0;
var highScore = 0;
quizLoad();

function quizLoad() {
  deSelectInput();

  var currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  aText.innerText = currentQuizData.a;
  bText.innerText = currentQuizData.b;
  cText.innerText = currentQuizData.c;
  dText.innerText = currentQuizData.d;
}


function getSelection() {
  var answer = undefined;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

function deSelectInput() {
  answerEls.forEach((answer) => {
    answer.checked = false;
  });
}



function getResult(){
  var scr = score;
  document.querySelector('.scr').textContent = scr;
  $("#result").show();
  $("#main").hide();
}

function QuizVaildation(){
  var answer = getSelection();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    else{
      score=score-4
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
      quizLoad();
      document.querySelector('.score').textContent = score;
    } 
    else {
      $("#next").hide();
      $("#submit").show();
     //getResult()

    }
  }
}
nextBtn.addEventListener("click", QuizVaildation);
submitBtn.addEventListener("click", getResult);

