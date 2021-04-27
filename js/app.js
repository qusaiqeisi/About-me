'use strict'

let userName = prompt('hello. your name please?');
console.log(userName);

alert(' welcom to my website ' + userName);

let score = 0;

alert('answer by yes or no please');

//qusation 1
let userAnswer = prompt('do you know me is qusai?');

switch (userAnswer.toLowerCase()) {
    case 'yes':
    case 'y':
        console.log('perfect');
        score++;
        break;
    case 'no':
    case 'n':
        console.log('hi iam qusai');
        break;
    default:
        console.log('yes or no answer')
}
if (userAnswer === 'yes') {
    alert('good to know');
} else {
    alert('hi iam qusai');
}

//qusation 2


let userAnswer2 = prompt('did you know that my age is 28 ?');

switch (userAnswer2.toLowerCase()) {
    case 'yes':
    case 'y':
        console.log('perfect');
        score++;
        break;
    case 'no':
    case 'n':
        console.log('i am 28');
        break;
    default:
        console.log('yes or no answer');
}

if (userAnswer2 === 'yes') {
    alert('long life bro');
} else {
    alert('i am 28');
}

//qusation 3

let userAnswer3 = prompt('Are you and me studed togather?');

switch (userAnswer3.toLowerCase()) {
    case 'yes':
    case 'y':
        console.log('perfect');
        score++;
        break;
    case 'no':
    case 'n':
        console.log('i studed in MUET');
        break;
    default:
        console.log('yes or no answer');
}

if (userAnswer3 === 'yes') {
    alert('good to know');
} else {
    alert('i studed in MUET');
}

//qusation 4

let userAnswer4 = prompt('do you have intrest in motivation?');

switch (userAnswer4.toLowerCase()) {
    case 'yes':
    case 'y':
        console.log('self motivation');
        score++;
        break;
    case 'no':
    case 'n':
        console.log('we well work on it');
        break;
    default:
        console.log('yes or no answer');
}

if (userAnswer4 === 'yes') {
    alert('correct answer');
} else {
    alert('we well work on it');
}
//qusation 5

let userAnswer5 = prompt('would you like to know more about me ?');

switch (userAnswer5.toLowerCase()) {
    case 'yes':
        console.log('perfect');
        score++;
        break;
    case 'no':
        console.log('thank you for yor time');
        break;
    default:
        console.log('yes or no answer');
}

if (userAnswer5 === 'yes') {
    alert('my plauser ');
} else {
    alert('thank you for yor time');
}
// question 6
let userAnswer6;

for (let i = 0; i < 4; i++) {
    userAnswer6 = prompt('guess my length ?')
    if (userAnswer6 > 176) {
        alert('too high');
    }
    else if (userAnswer6 < 176) {
        alert('too low');
    }
    if (userAnswer6 == 176) {
        alert('correct');
        score++;
        break;
    }
}



let favDrink = ['tea' , 'greentea' , 'boom' , 'arabiccoffee' ];
let userAnswer7;
for (let i = 0; i < 6; i++) {
    userAnswer7 = prompt('guess what is my favourite drink ?');
    if (favDrink[0] == userAnswer7) {
        alert('wow thats correct');
        score++;
        break;
    } else if (favDrink[1] == userAnswer7) {
        alert('wow thats correct');
        score++;
        break;
    } else if (favDrink[2] == userAnswer7) {
        alert('wow thats correct');
        score++;
        break;
    }
    else if (favDrink[3] == userAnswer7) {
        alert('wow thats correct');
        score++;
        break;
    }
    alert('try another drink')
    }
    console.log(score);

    alert(' i well always be happy to know dear ' + userName + ' my FavBook is ' + favDrink + 'your score' + score );