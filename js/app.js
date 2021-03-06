'use strict';
let counter=0;
confirm('Lets see how well you know me\n answer these simple questions');
let userName=prompt('What is your name dear');
function greetings(name){
  return alert('greetings ' + name +' hope you are well today');
}
let answ;
greetings(userName);
function birthGuess(answ){
  answ=prompt('Were I born in Zaqra');
  if(answ==='y' || answ==='yes'){
    alert('correct good job');
    counter+=1;
  }else {
    alert('wrong answer');
}
  answ=prompt('Am I 24 years old');
  if(answ==='y' || answ==='yes'){
    alert('correct good job');
    counter+=1;
  }else {
    alert('wrong answer');
  }
  answ=prompt('Am I a short guy');
  if(answ==='y' || answ==='yes'){
    alert('correct good job');
    counter+=1;
  }else {
    alert('wrong answer');
  }
  answ=prompt('Am I smart');
  if(answ==='y' || answ==='yes'){
    alert('correct good job');
    counter+=1;
  }else {
    alert('wrong answer');
  }
  answ=prompt('Am I into quantum phyics');
  if(answ==='y' || answ==='yes'){
    alert('correct good job');
    counter+=1;
  }else {
    alert('wrong answer');
  }

  return alert('you got '+ counter +' out of 5');
}
birthGuess(answ);
let randomNumber = Math.floor(Math.random() * 101);
let x ;
let userHint=['too high', 'too low', 'out of attempts'];
let userNumber;
let guessCount=4;
function randomFxn (b){
  alert('guess a number between \n 0-100');
  for (let i =0;i<4;i++){
    x=parseInt(prompt(' guess a number between \n 0-100' ));
    if(x<randomNumber){
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
    guessCount--;
    alert('trial left : ' + guessCount);
}
}
randomFxn(x);
let possibleCauses=['neutron energy', 'type of reaction', 'target energy'];
let userGuess;
let correct=false;
function nuclearCauses(cross){
  for (let i =1;i<=6;i++){
    userGuess=prompt('gues a factor that affects the probability of \n nuclear rxn');
    for (let j =0;j<3;j++){
      if (userGuess===possibleCauses[j]) {
        j=6;
        correct=true;
        alert('good guess '+possibleCauses+' are all correct');
        return alert('trial sofar : ' + i);
        break;
      }
     
    }
    alert('trial sofar : ' + i);
  }
}
nuclearCauses(userGuess);