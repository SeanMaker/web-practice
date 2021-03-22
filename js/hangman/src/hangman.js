


class HangMan{
    constructor(word,num){
        // this.word=word.toLowerCase().replace(/\s*/g,'').split('')
        this.word=word.toLowerCase().split('')
        this.remainingGuesses=num
        this.guessedLetter=[]
        this.status='playing'
    }
    calculateStatus(){
        const finished=this.word.every((letter)=>{
            return this.guessedLetter.includes(letter)
        })

        if(this.remainingGuesses<=0){
            this.status='failed'
        }else if(finished){
            this.status='finished'
        }else{
            this.status='playing'
        }
    }
    get puzzle(){
        let puzzle=''
        this.word.forEach((letter)=>{
            if(this.guessedLetter.includes(letter)|| letter===' '){
                puzzle+=letter
            }else{
                puzzle+='*'
            }
        })
        return puzzle
    }
	
    makeGuess(guess){
        guess=guess.toLowerCase()

        if(this.status!=='playing'){
            return
        }

        if(!this.guessedLetter.includes(guess)){
            
            this.guessedLetter=[...this.guessedLetter,guess]
        }
        if(!this.guessedLetter.includes(guess)||!this.word.includes(guess)){
            this.remainingGuesses--
        }
        this.calculateStatus()
    }
	
    get statusMessage(){
        if (this.status==='playing'){
            return `Guesses left: ${this.remainingGuesses}`
        }
        else if(this.status==='finished'){
            return 'Great Work! You guessed the word.'
        }
        else if (this.status==='failed'){
            return `Nice try! The word was "${this.word.join('')}"`
        }
    }
}


export { HangMan as default }






