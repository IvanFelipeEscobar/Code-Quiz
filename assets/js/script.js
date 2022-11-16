var startBtn = document.getElementById(`startBtn`)
var btn1 = document.getElementById(`btn1`)
var btn2 = document.getElementById(`btn2`)
var btn3 = document.getElementById(`btn3`)
var btn4 = document.getElementById(`btn4`)
var btns = document.getElementById(`buttons`)
var qText = document.getElementById(`text`)
var timer = document.getElementById(`timer`)
var questions = [
    {q: `JavaScript Boolean Data types can be:`,
     a: [`a. Very Scary`, `b. Positive or Negative`, `c. True or False`, `d. Integers`],
     correct: `c. True or False`
    },

    {q: `What HTML element contains JavaScript:`,
    a: [`a. Code`, `b. Script`, `c. Style`, `d. Link`],
    correct: `b. Script`
    },

    {q: `Arrays are declared inside of:`,
    a: [`a. Square Brackets []`, `b. Curly Brackets {}`, `c. Parenthesis ()`, `d. Quotations ""`],
    correct: `a. Square Brackets []`
    },

    {q: `Method used to merge existing arrays:`,
    a: [`a. merge()`, `b. append()`, `c. add()`, `d. concat()`],
    correct: `d. concat()`
    },

    {q: `DOM stands for:`,
     a: [`a. Document Object Model`, `b. Dominant Element`, `c. Direct Object Manipoulation`, `d. Domo Arigato Mr. Roboto`],
     correct: `a. Document Object Model`
    },

    {q: `Searching for and correcting errors in programming code is formerly known as:`,
     a: [`a. Trial & Error`, `b. Debugging`, `c. Reverse Engineering`, `d. Version Control`],
     correct: `b. Debugging`
    }
]
var questionIndex = 0
var secondsLeft = 60
var score = 0

startBtn.addEventListener(`click`, startQuiz)
    
function startQuiz()
{
  nextQuestion(questionIndex)
  document.getElementById(`start`).classList.add(`hide`)

  setTime();

  btns.addEventListener(`click`, function(event) {
    chosenQuestion = event.target
    if (chosenQuestion.matches(`button`)){
      nextQuestion(questionIndex)
    }})

 
}


function nextQuestion() {
  if (questionIndex >= questions.length) {
    endGame()
  }
  else {
    qText.innerHTML = `${questions[questionIndex].q}`
    btn1.innerHTML = `${questions[questionIndex].a[0]}`
    btn2.innerHTML = `${questions[questionIndex].a[1]}`
    btn3.innerHTML = `${questions[questionIndex].a[2]}`
    btn4.innerHTML = `${questions[questionIndex].a[3]}`
    questionIndex++
  }
    
}




function setTime() 
  {
    
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timer.innerText = secondsLeft + " seconds left";
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        endGame()
      }
  
    }, 1000);
  }

  function endGame()
  {
    score = secondsLeft
    console.log(score)
  }