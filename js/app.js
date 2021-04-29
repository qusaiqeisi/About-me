'use strict'
let score = 0;

function f1(){
let userName = prompt('hello. your name please?');
console.log(userName);

alert(' welcom to my website ' + userName);


alert('answer by yes or no please');
}
f1();

//qusation 1
function f2(){
let userAnswer = prompt('do you know my name is qusai?');

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
}
f2();
//qusation 2
function f3(){

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
}
f3();
//qusation 3
function f4(){
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
}
f4();
//qusation 4
function f5(){
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
}
f5();

//qusation 5
function f6(){
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
}
f6();



// question 6

function f7(){
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
alert("the correct answer is : 176");
}
f7();

function f8(){
let favDrink = ['tea' , 'greentea' , 'boom' , 'arabiccoffee' ];
let userAnswer7;
for (let i = 0; i < 6; i++) {
    userAnswer7 = prompt('guess what is my favourite drink ?');

    for(let j=0 ; j<favDrink.length ;j++){
        if (userAnswer7==favDrink[j]){
            alert('correct answer');
            score++;
            break;
        }else {
            alert ('wrong try agin ')
            userAnswer7 = prompt('guess what is my favourite drink ?');

        }

    }
    break;
    // if (favDrink[0] == userAnswer7) {
    //     alert('wow thats correct');
    //     score++;
    //     break;
    // } else if (favDrink[1] == userAnswer7) {
    //     alert('wow thats correct');
    //     score++;
    //     break;
    // } else if (favDrink[2] == userAnswer7) {
    //     alert('wow thats correct');
    //     score++;
    //     break;
    // }
    // else if (favDrink[3] == userAnswer7) {
    //     alert('wow thats correct');
    //     score++;
    //     break;
    // }
    // alert('try another drink')
    // }
}
}
f8();
    console.log(score);

    alert(' i well always be happy to know dear ' + userName + ' my FavBook is ' + favDrink + 'your score' + score );