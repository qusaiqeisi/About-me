'use strict'

let userName= prompt ('hello. your name please?');
console.log(userName);

alert(' welcom to my websit ' + userName);


alert('answer by yes or no please');

//qusation 1
let userAnswer = prompt('do you know me?');

switch(userAnswer.toLowerCase()){
    case 'yes':
        console.log('perfect');
      break;
    case 'no':
        console.log('hi iam qusai');
        break;
        default:
            console.log('yes or no answer')
}
if (userAnswer === 'yes'){
    alert('good to know');
} else {
    alert('hi iam qusai');
}

//qusation 2


let userAnswer2 = prompt('are your age same main ?');

switch(userAnswer2.toLowerCase()){
    case 'yes':
        console.log('perfect');
        
      break;
    case 'no':
        console.log('i am 28');
        break;
        default:
            console.log('yes or no answer');
}

if (userAnswer2 === 'yes'){
    alert('long life bro');
} else {
    alert ('i am 28');
}

//qusation 3

let userAnswer3 = prompt('Are you and me studed togather?');

switch(userAnswer3.toLowerCase()){
    case 'yes':
        console.log('perfect');
        
      break;
    case 'no':
        console.log('i studed in MUET');
        break;
        default:
            console.log('yes or no answer');
}

if (userAnswer3 === 'yes'){
    alert('good to know');
}else{
alert('i studed in MUET');
}

//qusation 4

let userAnswer4 = prompt('do you have intrest in motivation?');

switch(userAnswer4.toLowerCase()){
    case 'yes':
        console.log('self motivation');
       
      break;
    case 'no':
        console.log('we well work on it');
        break;
        default:
            console.log('yes or no answer');
}

if (userAnswer4 === 'yes'){
    alert('correct answer');
}else {
alert('we well work on it');
}
//qusation 5

let userAnswer5 = prompt('would you like to know more about me ?');

switch(userAnswer5.toLowerCase()){
    case 'yes':
        console.log('perfect');
      break;
    case 'no':
        console.log('thank you for yor time');
        break;
        default:
            console.log('yes or no answer');
}

if (userAnswer5 === 'yes'){
    alert('my plauser ');
}else {
    alert('thank you for yor time');
}


alert(' i well always be happy to know dear ' + userName);
