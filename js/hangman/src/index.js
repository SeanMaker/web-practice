import HangMan from './hangman'
import getPuzzle from './requests'


let game1
let game2

const puzzleEl=document.querySelector('#puzzle')
const guessesEl=document.querySelector('#guesses')


window.addEventListener('keypress',(e)=>{
    const guess=String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    render()
    console.log(game1.status)
})

const startGame=async()=>{
    const puzzle=await getPuzzle(2)
    game1=new HangMan(puzzle,8)
    render()
}


const render=()=>{
    puzzleEl.innerHTML=''
    guessesEl.textContent=game1.statusMessage

    game1.puzzle.split('').forEach((element)=>{
        const lettleEl=document.createElement('span')
        lettleEl.textContent=element
        puzzleEl.appendChild(lettleEl)
    })
}



document.querySelector('#reset').addEventListener('click',startGame)

startGame()





