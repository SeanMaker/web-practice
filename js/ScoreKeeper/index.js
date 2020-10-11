
const p1Button=document.getElementById('p1')
const p2Button=document.getElementById('p2')
const resetButton=document.getElementById('reset')
const inputScore=document.getElementById('inputScore')
const maxScore=document.getElementById('maxScore')

const s1El=document.getElementById('score_1')
const s2El=document.getElementById('score_2')

let score_1=0
let score_2=0
let topScore=5
let gameOver=false


inputScore.addEventListener('input',(e)=>{
    maxScore.textContent=e.target.value
    topScore=e.target.value
})

p1Button.addEventListener('click',()=>{
    if(score_1<topScore && gameOver===false){
        score_1+=1
    }
    if(score_1==topScore){
        s1El.style.color='green'
        gameOver=true
        console.log('GameOver')
    }
    s1El.textContent=score_1
})

p2Button.addEventListener('click',()=>{

    if(score_2<topScore && gameOver===false){
        score_2+=1
    }
    if(score_2==topScore){
        s2El.style.color='green'
        gameOver=true
        console.log('GameOver')
    }
    s2El.textContent=score_2
})


resetButton.addEventListener('click',()=>{
    score_1=0
    score_2=0
    gameOver=false
    s1El.textContent=0
    s2El.textContent=0
    s1El.style.color='black'
    s2El.style.color='black'
})







