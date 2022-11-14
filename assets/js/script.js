var startBtn = document.getElementById(`startBtn`)
var btn1 = document.getElementById(`btn1`)
var btn2 = document.getElementById(`btn2`)
var btn3 = document.getElementById(`btn3`)
var btn4 = document.getElementById(`btn4`)
var qText = document.getElementById(`text`)
var questions = [
    {q: `sample q`,
     a: [`a`, `b`, `c`, `d`],
     correct: `0`
    },
    {q: `sample q 2`,
    a: [`a2`, `b2`, `c2`, `d2`],
    correct: `1`
   },
   {q: `sample q3`,
   a: [`a3`, `b3`, `c3`, `d3`],
   correct: `3`
  },
  {q: `sample q4`,
  a: [`a4`, `b4`, `c4`, `d4`],
  correct: `2`
 }
]
var i = 0


startBtn.addEventListener(`click`, startQuiz)
    
function startQuiz(){
  
   qText.innerHTML = `${questions[i].q}`
   btn1.innerHTML = `${questions[i].a[0]}`
   btn2.innerHTML = `${questions[i].a[1]}`
   btn3.innerHTML = `${questions[i].a[2]}`
   btn4.innerHTML = `${questions[i].a[3]}`
document.getElementById(`start`).classList.add(`hide`)
btn1.addEventListener(`click`, nextQuestion )
    
btn3.addEventListener(`click`, nextQuestion)

btn4.addEventListener(`click`, nextQuestion)

btn2.addEventListener(`click`, nextQuestion)

}
 
function nextQuestion(){
    i++


    qText.innerText = questions[i].q
    btn1.innerHTML = `${questions[i].a[0]}`
    btn2.innerHTML = `${questions[i].a[1]}`
    btn3.innerHTML = `${questions[i].a[2]}`
    btn4.innerHTML = `${questions[i].a[3]}`

}