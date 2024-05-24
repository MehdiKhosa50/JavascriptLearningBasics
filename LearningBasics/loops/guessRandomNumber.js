function generateRandomNumber(){
    return Math.floor(Math.random() * 101);
}
let guessNumber = prompt("Enter a num to guess: ");
let trueNumber = 50;
console.log(trueNumber);
while(guessNumber!=trueNumber){
    guessNumber = prompt("WrongNumber! Enter again: ");
}
console.log("Congratulations! Entered RightNumber");