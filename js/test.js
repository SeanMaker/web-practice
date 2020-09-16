const randomArray=['Jan','Jan','Jan','Jan','Jan']
const randomArray2=['Jan','Jan','Jan','Jan','Feb']
const randomArray3=['Jan', 'March','Jan','Jan']
const months = ['Jan', 'March', 'April', 'June','July'];
months.splice(1, 0, 'Feb');

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]

months.pop()
console.log(months);

const printReverse=(array)=>{
    const reversedArray=array.reverse()
    console.log(reversedArray)
}

printReverse(months)


const isUniform=(array)=>{
    let flag=true
    const firstElement=array[0]
    for(let i=1;i<array.length;i++){
        if(array[i]!==firstElement){
            flag=false
            break
        }
    }
    console.log(flag)
}


isUniform(randomArray)
isUniform(randomArray2)
isUniform(randomArray3)

const sumArray=(array)=>{
    sum=0
    for(let i=0; i<array.length; i++){
        sum+=array[i]
    }

    console.log(sum)
}

sumArray([-7,26,-30])

const max=(array)=>{
    let maxNum=array[0]
    for(let i=1; i<array.length; i++){
       if(array[i]>maxNum){
           maxNum=array[i]
       }
    }
    console.log(maxNum)
}

max([7,-1,99,-2,-100,50,70])
max([1,2,3])

const sumForeach=(array)=>{
    let sum=0
    array.forEach(element=>{
        sum+=element
    })
    console.log(sum)
}

sumForeach([1,2,3,100,-6])
