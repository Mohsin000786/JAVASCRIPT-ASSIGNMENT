function guessNumber(){
    let randomnumber = Math.floor(Math.random() * 10) + 1;

    console.log(randomnumber);

    const guessnumber = +prompt("Guess a Number");

    if(randomnumber === guessnumber){
        console.log("Good Work");
    }else{
        console.log("Sorry Not matched")
    }
}

guessNumber();