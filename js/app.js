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
  alert('correct good job ' +userName +'\n' + 'you got ' + counter + ' out of 5');
  // console.log('correct good job ' + userName)
}else if(smartGuess==='n' || smartGuess==='no'){
  alert('wrong I love it '+ userName);
  // console.log('wrong I love it ' + userName);
}
