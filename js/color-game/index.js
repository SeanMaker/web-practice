let numSquares = 6;
const squares=document.querySelectorAll('.square')
let colors=[]
let pickedColor
const colorDisplay=document.getElementById('rgb')
const message=document.getElementById('message')
const resetBtn=document.getElementById('reset')
const header=document.querySelector('.header')
const modeBtns=document.querySelectorAll('.mode')

init()

function init(){
    setupModeBtns()
    setupSquares()
    reset()

}

function setupModeBtns() {
    for(let i=0;i<modeBtns.length;i++){
        modeBtns[i].addEventListener('click',()=>{
            modeBtns[0].classList.remove('selected')
            modeBtns[1].classList.remove('selected')
            modeBtns[i].classList.add('selected')
            modeBtns[i].textContent==='EASY'? numSquares=3:numSquares=6
            reset()
        })
    }
}

function setupSquares(){
    for(let i=0; i<squares.length;i++){
        // console.log(squares[i].style.background)
        squares[i].addEventListener('click',()=>{
            // console.log(squares[i].style.background)
            const clickedColor=squares[i].style.background
            // console.log(clickedColor)
            // console.log(pickedColor)
            if(clickedColor===pickedColor){
                message.textContent='Correct!'
                resetBtn.textContent='Play Again?'
                changeColors(clickedColor)
                header.style.backgroundColor=pickedColor
            }else{
                squares[i].style.backgroundColor="#232323";
                message.textContent="Try Again!"
            }
        })
    }
}

function reset(){
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    resetBtn.textContent = "New Colors";
    message.textContent = "";
    for(var i = 0; i < squares.length; i++) {
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    header.style.backgroundColor = '#3498db';
}

resetBtn.addEventListener('click',()=>{
    reset()
})


function generateRandomColors(num){
    let colors=[]
    let color=''
    for(let i=0;i<num;i++){
        color=createRandomColor()
        colors.push(color)
    }
    // console.log(colors)
    return colors
}

function createRandomColor(){
    const r=Math.floor(Math.random()*256)
    const g=Math.floor(Math.random()*256)
    const b=Math.floor(Math.random()*256)
    // console.log(`rgb(${r},${g},${b})`)
    return `rgb(${r}, ${g}, ${b})`
}

function pickColor(){
    const random = Math.floor(Math.random() * colors.length);
    // console.log(colors[random])
    return colors[random];
}

function changeColors(color){
    for(let i = 0; i < squares.length; i++) {
        //change each color to match given color
        squares[i].style.background = color;
    }
}



