let grades = prompt("Enter a number to check grade");
if(isNaN(grades) || grades>100 || grades<0){
    console.log("You have enterted an invalid number");
}else if(grades>=80 && grades<=100){
    console.log("Your grade is A");
}else if(grades>=70 && grades<=79){
    console.log("Your grade is B");
}else if(grades>=60 && grades<=69){
    console.log("Your grade is C");
}else if(grades>=50 && grades<=59){
    console.log("Your grade is D");
}else if(grades>=0 && grades<=49){
    console.log("Your grade is F");
}

switch(true){
    case(grades>=80 && grades<=100):
    console.log("Your grade is A");
    break;
    case(grades>=70 && grades<=79):
    console.log("Your grade is B");
    break;
    case(grades>=60 && grades<=69):
    console.log("Your grade is C");
    break;
    case(grades>=50 && grades<=59):
    console.log("Your grade is D");
    break;
    case(grades>=0 && grades<=49):
    console.log("Your grade is F");
    break;
    default:
        console.log("You have enterted an invalid number");
}