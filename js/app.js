'use strict';
let counter=0;
confirm('Lets see how well you know me\n answer these simple questions');
let userName=prompt('What is your name dear');
function greetings(name){
  return alert('greetings ' + name +' hope you are well today');
}
greetings(userName);
let birthGuess=prompt('Were I born in Zaqra').toLocaleLowerCase();
if(birthGuess==='y' || birthGuess==='yes'){
  alert('correct good job');
  counter+=1;
  // console.log('correct good job')
}else if(birthGuess==='n' || birthGuess==='no'){
  alert('I thought you knew me better');
  // console.log('I thought you knew me better');
}
let ageGuess=prompt('Am I 24 years old').toLocaleLowerCase();
if(ageGuess==='y' || ageGuess==='yes'){
  alert('correct good job');
  counter+=1;

  // console.log('correct good job')
}else if(ageGuess==='n' || ageGuess==='no'){
  alert('I thought you knew me better');
  // console.log('I thought you knew me better');
}
let heightGuess=prompt('Am I a short guy').toLocaleLowerCase();
if(heightGuess==='y' || heightGuess==='yes'){
  alert('correct good job');
  counter+=1;
  // console.log('correct good job')
}else if(heightGuess==='n' || heightGuess==='no'){
  alert('I thought you knew me better');
  // console.log('I thought you knew me better');
}
let smartGuess=prompt('Am I smart').toLocaleLowerCase();
if(smartGuess==='y' || smartGuess==='yes'){
  counter+=1;
  alert('correct good job');
  // console.log('correct good job')
}else if(smartGuess==='n' || smartGuess==='no'){
  alert('rude !!!!');
  // console.log('rude !!!!');
}
let physicsGuess=prompt('Am I into quantum phyics').toLocaleLowerCase();
if(physicsGuess==='y' || physicsGuess==='yes'){
  counter+=1;
  alert('correct good job ' +userName);
  // console.log('correct good job ' + userName)
}else if(smartGuess==='n' || smartGuess==='no'){
  alert('wrong I love it '+ userName);
  // console.log('wrong I love it ' + userName);
}

let userHint=['too high', 'too low', 'out of attempts'];
let guessCount=4;
let randomNumber = Math.floor(Math.random() * 101);
let userNumber=parseInt(prompt('guess a number between 1 & 100\n you have 4 shots'));
console.log(randomNumber);
do{
  guessCount--;
  userNumber=parseInt(prompt('Try again you have '+guessCount +' shots left' ));
  if(userNumber<randomNumber){
    alert(userHint[1]);
  }
  if(userNumber>randomNumber){
    alert(userHint[0]);
  }
  if(userNumber===randomNumber){
    alert('Good gues you got it');
    counter+=1;
    break;
  }
  if(guessCount===1){
    alert(userHint[2]);
  }
}while(guessCount>1);
let possibleCauses=['neutron energy', 'type of reaction', 'target energy','target nucleus'];
let causeNum=possibleCauses.length-1;
let allowedAttempts=6;
let userguessed;
let i=0;
let neutronGuess=prompt('Name a factor that affects the probability of a nuclear reaction \n you get 6 chinces to guess one');
do{
  allowedAttempts-=1;
  for(i;i<=causeNum;i++){
    if(possibleCauses[i]===neutronGuess){
      alert('good guess, here is the list of the other causes' + '\n'+ possibleCauses);
      counter+=1;

      userguessed=1;
      break;
    }
  }
  if(userguessed===1){
    break;
  }
  if(allowedAttempts===0){
    alert('you did not gues, the answer is any of the following \n '+ possibleCauses);
  }
  neutronGuess=prompt('Name a factor that affects the probability of a nuclear reaction \n you get' + allowedAttempts+ ' chinces to guess one');
}while(allowedAttempts>1);

alert('you got ' + counter +' out of 7 questions');
