function isEven(num) {
    num%2==0? console.log(true): console.log(false)
}

isEven(5)

function factorial(num){
    let sum=1
    for(let i=num;i>0;i--){
        sum=sum*i
    }
    return console.log(sum)
}

factorial(3)

function kebabToSnake(str){
    const change=/-/gi
   return  console.log(str.replace(change,'_'))
}

kebabToSnake('hellow-world')
kebabToSnake('blah')
kebabToSnake('dogs-are-awesome')


