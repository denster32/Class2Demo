'use strict';

console.log('hey world');

let userName = prompt('What is your name?');
alert(`Welcome to my site ${userName}! Please answer the following questions with yes/no or y/n. I'd like to spend sometime for you to get to know me.`);
console.log(`user name is ${userName}`);

let questionOneGuess = prompt(`${userName}, do I have a daughter?`);
questionOneGuess = questionOneGuess.toLowerCase();
console.log(`user chose ${questionOneGuess}`);
while(questionOneGuess == !'no' || !'yes' || !'n' || !'y'){
  questionOneGuess = prompt('Please answer with a yes/no or y/n.  Do I have a daughter?');
  questionOneGuess = questionOneGuess.toLowerCase();
  console.log(`user chose ${questionOneGuess}`);
}
if(questionOneGuess === 'yes' || questionOneGuess ==='y'){
  alert('You got it wrong! No kids, never married.');
}
else if(questionOneGuess === 'no' || questionOneGuess === 'n'){
  alert('Correct!');
}


let questionTwoGuess = prompt(`${userName}, do I have a dog?`);
questionTwoGuess = questionTwoGuess.toLowerCase();
console.log(`user chose ${questionTwoGuess}`);
while(questionTwoGuess == !'no' || !'yes' || !'n' || !'y'){
  questionTwoGuess = prompt('Please answer with a yes/no or y/n.  Do I have a dog?');
  questionTwoGuess = questionTwoGuess.toLowerCase();
  console.log(`user chose ${questionTwoGuess}`);
}
if(questionTwoGuess === 'yes' || questionTwoGuess ==='y'){
  alert('Correct!');
}
else if(questionTwoGuess === 'no' || questionTwoGuess === 'n'){
  alert('Wrong... I have a 15 year old Husky.');
}


let questionThreeGuess = prompt(`${userName}, have I ever been to space?`);
questionThreeGuess = questionThreeGuess.toLowerCase();
console.log(`user chose ${questionThreeGuess}`);
while(questionThreeGuess == !'no' || !'yes' || !'n' || !'y'){
  questionThreeGuess = prompt('Please answer with a yes/no or y/n.  Have I been to space!?');
  questionThreeGuess = questionThreeGuess.toLowerCase();
  console.log(`user chose ${questionThreeGuess}`);
}
if(questionThreeGuess === 'yes' || questionThreeGuess ==='y'){
  alert(`${userName}, very few people have been to space... and I am not one of them.`);
}
else if(questionThreeGuess === 'no' || questionThreeGuess === 'n'){
  alert(`Correct ${userName}, I have not been to space.`);
}



let questionFourGuess = prompt(`${userName}, do I enjoy pizza?`);
questionFourGuess = questionFourGuess.toLowerCase();
console.log(`user chose ${questionFourGuess}`);
while(questionFourGuess == !'no' || !'yes' || !'n' || !'y'){
  questionFourGuess = prompt('Please answer with a yes/no or y/n.  Do I enjoy pizza?');
  questionFourGuess = questionFourGuess.toLowerCase();
  console.log(`user chose ${questionFourGuess}`);
}
if(questionFourGuess === 'yes' || questionFourGuess ==='y'){
  alert(`Thats the correct answer ${userName}, everyone enjoys pizza!`);
}
else if(questionFourGuess === 'no' || questionFourGuess === 'n'){
  alert(`${userName}, everyone enjoys pizza to include myself.`);
}



let questionFiveGuess = prompt(`${userName}, have I ever been struck by lightning?`);
questionFiveGuess = questionFiveGuess.toLowerCase();
console.log(`user chose ${questionFiveGuess}`);
while(questionFiveGuess == !'no' || !'yes' || !'n' || !'y'){
  questionFiveGuess = prompt('Please answer with a yes/no or y/n.  Have I ever been struck by lightning?');
  questionFiveGuess = questionFiveGuess.toLowerCase();
  console.log(`user chose ${questionFiveGuess}`);
}
if(questionFiveGuess === 'yes' || questionFiveGuess ==='y'){
  alert(`${userName}, I have had some close calls but I have never been struck by lightning.`);
}
else if(questionFiveGuess === 'no' || questionFiveGuess === 'n'){
  alert(`${userName}, thats correct, I have never been struck by lightning.`);
}
