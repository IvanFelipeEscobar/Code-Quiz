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
     correct: 2
    },
    {q: `What HTML element contains JavaScript:`,
    a: [`a. Code`, `b. Script`, `c. Style`, `d. Link`],
    correct: 1
    },
    {q: `Arrays are declared inside of:`,
    a: [`a. Square Brackets []`, `b. Curly Brackets {}`, `c. Parenthesis ()`, `d. Quotations ""`],
    correct: 0
    },
    {q: `Method used to merge existing arrays:`,
    a: [`a. merge()`, `b. appdend()`, `c. add()`, `d. concat()`],
    correct: 3
    },
    {q: `DOM stands for:`,
     a: [`a. Document Object Model`, `b. Dominant Element`, `c. Direct Object Manipoulation`, `d. Domo Arigato Mr. Roboto`],
     correct: 0
    },
    {q: `Searching for and correcting errors in programming code is formerly known as:`,
     a: [`a. Trial & Error`, `b. Debugging`, `c. Reverse Engineering`, `d. Version Control`],
     correct: 1
    }
]
var questionIndex = 0
var secondsLeft = 60


startBtn.addEventListener(`click`, startQuiz)
    
function startQuiz(){
  
nextQuestion(questionIndex)
document.getElementById(`start`).classList.add(`hide`)

setTime();
btns.addEventListener(`click`, nextQuestion )
    

}
 
function nextQuestion(){
    
if (questionIndex > 5) {
  endGame()
} else 
    {qText.innerText = questions[questionIndex].q
    btn1.innerHTML = `${questions[questionIndex].a[0]}`
    btn2.innerHTML = `${questions[questionIndex].a[1]}`
    btn3.innerHTML = `${questions[questionIndex].a[2]}`
    btn4.innerHTML = `${questions[questionIndex].a[3]}`
    questionIndex++
    }

}

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timer.innerText = secondsLeft + " seconds left";
  
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create and append image
        console.log(`game over`);
      }
  
    }, 1000);
  }
  function endGame(){
    console.log(`game over`)
  }