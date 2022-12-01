'use strict';

let userScore = 0;
let userName = prompt('What is your name?');
while(!userName){
  userName = prompt('What is your name? Really, we need it.');
}
alert(`Welcome to my site ${userName}! Please answer the following questions with yes/no or y/n. I'd like to spend sometime so that you can get to know me.`);

questionOne();
questionTwo();
questionThree;


// console.log(`user name is ${userName}`);
function questionOne(){
  let questionOneGuess = prompt(`${userName}, do I have a daughter?`).toLowerCase();
  // console.log(`user chose ${questionOneGuess}`);
  while(questionOneGuess === !'no' || !'yes' || !'n' || !'y'){
    questionOneGuess = prompt('Please answer with a yes/no or y/n.  Do I have a daughter?').toLowerCase();
  // console.log(`user chose ${questionOneGuess}`);
  }
  if(questionOneGuess === 'yes' || questionOneGuess ==='y'){
    alert('You got it wrong! No kids, never married.');
  }
  else if(questionOneGuess === 'no' || questionOneGuess === 'n'){
    alert('Correct!');
    userScore++;
  // console.log(userScore);
  }
}

function questionTwo(){
  let questionTwoGuess = prompt(`${userName}, do I have a dog?`).toLowerCase();
  // console.log(`user chose ${questionTwoGuess}`);
  while(questionTwoGuess === !'no' || !'yes' || !'n' || !'y'){
    questionTwoGuess = prompt('Please answer with a yes/no or y/n.  Do I have a dog?').toLowerCase();
  // console.log(`user chose ${questionTwoGuess}`);
  }
  if(questionTwoGuess === 'yes' || questionTwoGuess ==='y'){
    alert('Correct!');
    userScore++;
  // console.log(userScore);
  }
  else if(questionTwoGuess === 'no' || questionTwoGuess === 'n'){
    alert('Wrong... I have a 15 year old Husky.');
  }
}

function questionThree(){
  let questionThreeGuess = prompt(`${userName}, have I ever been to space?`).toLowerCase();
  // console.log(`user chose ${questionThreeGuess}`);
  while(questionThreeGuess === !'no' || !'yes' || !'n' || !'y'){
    questionThreeGuess = prompt('Please answer with a yes/no or y/n.  Have I been to space!?').toLowerCase();
  // console.log(`user chose ${questionThreeGuess}`);
  }
  if(questionThreeGuess === 'yes' || questionThreeGuess ==='y'){
    alert(`${userName}, very few people have been to space... and I am not one of them.`);
  }
  else if(questionThreeGuess === 'no' || questionThreeGuess === 'n'){
    alert(`Correct ${userName}, I have not been to space.`);
    userScore++;
  // console.log(userScore);
  }
}

let questionFourGuess = prompt(`${userName}, do I enjoy pizza?`).toLowerCase();
// console.log(`user chose ${questionFourGuess}`);
while(questionFourGuess === !'no' || !'yes' || !'n' || !'y'){
  questionFourGuess = prompt('Please answer with a yes/no or y/n.  Do I enjoy pizza?').toLowerCase();
  // console.log(`user chose ${questionFourGuess}`);
}
if(questionFourGuess === 'yes' || questionFourGuess ==='y'){
  alert(`Thats the correct answer ${userName}, everyone enjoys pizza!`);
  userScore++;
  // console.log(userScore);
}
else if(questionFourGuess === 'no' || questionFourGuess === 'n'){
  alert(`${userName}, everyone enjoys pizza to include myself.`);
}

let questionFiveGuess = prompt(`${userName}, have I ever been struck by lightning?`).toLowerCase();
// console.log(`user chose ${questionFiveGuess}`);
while(questionFiveGuess === !'no' || !'yes' || !'n' || !'y'){
  questionFiveGuess = prompt('Please answer with a yes/no or y/n.  Have I ever been struck by lightning?').toLowerCase();
  // console.log(`user chose ${questionFiveGuess}`);
}
if(questionFiveGuess === 'yes' || questionFiveGuess ==='y'){
  alert(`${userName}, I have had some close calls but I have never been struck by lightning.`);
}
else if(questionFiveGuess === 'no' || questionFiveGuess === 'n'){
  alert(`${userName}, thats correct, I have never been struck by lightning.`);
  userScore++;
  // console.log(userScore);
}

let myNum = Math.floor(Math.random() * 101);
// console.log(myNum);
let questionSixGuess = +prompt(`Let's play a little game ${userName}, please guess a number from 0 - 100.`);
for(let i = 0; i < 3; i++){
  if (questionSixGuess > myNum){
    questionSixGuess = +prompt('Too high, try again.');
  }
  else if (questionSixGuess < myNum){
    questionSixGuess = +prompt('Too low, try again.');
  }
  else{
    break;
  }
  // console.log(questionSixGuess);
}
if(myNum === questionSixGuess){
  alert(`Correct ${userName}, the answer is ${myNum}`);
  userScore++;
}
else{
  alert(`Wrong, the correct answer was ${myNum}`);
}
// console.log(questionSixGuess);

let favFoods = ['pizza', 'pasta', 'arbys', 'italian', 'chinese', 'rice', 'burgers', 'jimmy johns'];
let questionSevenGuess = prompt(`${userName}, please guess my favorite food.`).toLowerCase();
let out = 0;
for(let i = 0; i < 5; i++){
  for (const favFood of favFoods){
    // console.log(favFood);
    if(questionSevenGuess === favFood){
      out++;
      break;
    }
  }
  // console.log(out);
  if(out > 0){
    break;
  }
  else{
    questionSevenGuess = prompt(`Please try again ${userName}`);
  }
}
if(out > 0){
  alert(`Great job ${userName}!  Here are some of my other favorite foods: ${favFoods}`);
  userScore++;
}
else{
  alert(`Nice try ${userName}.  Here are some of my favorite foods: ${favFoods}`);
}

if(userScore === 7){
  alert('You got all of the questions correct... Great Job!');
}
else{
  alert(`${userName} you got ${userScore} of my questions right.`);
}
