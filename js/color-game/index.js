const lists_square=document.getElementsByClassName('square')

const message=document.getElementById('message')
console.log(message)

const createRandomColor=()=>{
    const r=Math.floor(Math.random()*256)
    const g=Math.floor(Math.random()*256)
    const b=Math.floor(Math.random()*256)
    return `rgb(${r},${g},${b})`
}
// console.log(getRandomColor())


const getColors=()=>{
    for(let i=0; i<lists_square.length;i++){
        lists_square[i].style.backgroundColor=createRandomColor()
        console.log(lists_square[i].style.backgroundColor)
    }
}
//assign color for each square
getColors()

document.getElementById('newColors').addEventListener('click',()=>{
    getColors()
})

const getRandomSquare=()=>{
    const squareIndex=Math.floor(Math.random()*6)
    const guessSquare=lists_square[squareIndex]
    console.log(guessSquare)
    return guessSquare

}

const square=getRandomSquare()
document.getElementById('rgb').textContent=square.style.backgroundColor

for(let j=0;j<lists_square.length;j++){
    if(lists_square[j].getAttribute('id')!==square.getAttribute('id')){
        lists_square[j].addEventListener('click',()=>{
            lists_square[j].classList.add('hidden')
            message.textContent='Try again!'

    })
    }else{
        lists_square[j].addEventListener('click',()=>{
            for(let i=0; i<lists_square.length;i++){
                lists_square[i].classList.remove('hidden')
                lists_square[i].classList.add('visible')
                lists_square[i].style.backgroundColor=square.style.backgroundColor
                message.textContent='Correct!'
            }
        })
    }

}







