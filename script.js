'use strict';
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const rollDice = document.querySelector('.btn--roll');
const changeUser = document.querySelector('.btn--hold');
const newGame = document.querySelector('.btn--new');
const player0El=document.querySelector('.player--0');
const player1El=document.querySelector('.player--1');
let playing=true;
let rollTime=0;
let score = [0, 0];
let currentScore = 0;
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
let activeplayer = 0;
const activecolor=()=>{
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}
const zeroCurrent=()=>{
  document.getElementById('current--0').textContent=0;
  document.getElementById('current--1').textContent=0;
}
const zeroScore=()=>{
  document.getElementById('score--0').textContent=0;
  document.getElementById('score--1').textContent=0;
}
rollDice.addEventListener('click', () => {
  if(playing){
  let diceNumber = Number(Math.trunc(Math.random() * 6 + 1));
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${diceNumber}.png`;
  if (diceNumber !== 1) {
       rollTime++;
       currentScore += diceNumber;
    score[activeplayer]+=diceNumber;
    document.getElementById(`score--${activeplayer}`).textContent=score[activeplayer];
    document.getElementById(`current--${activeplayer}`).textContent=rollTime;
  } else {
    rollTime=0;
    document.getElementById(`current--${activeplayer}`).textContent=0;
    currentScore=0;
    activeplayer=activeplayer===0?1:0;
    activecolor();
  }
  if(score[activeplayer]>=50){
    document.querySelector(`.player--${activeplayer}`).classList.add('player--winner');
    document.getElementById(`name--${activeplayer}`).textContent='Winner';
    zeroCurrent();
    playing=false;
  }
}
});
changeUser.addEventListener('click',()=>{
  rollTime=0;
  if(playing){
  activeplayer=activeplayer===0?1:0;
  activecolor();
  zeroCurrent();
}
})
newGame.addEventListener('click',()=>{
  document.querySelector(`.player--${activeplayer}`).classList.remove('player--winner');
  playing=true;
  score=[0,0]
  document.getElementById(`name--${activeplayer}`).textContent=`PLAYER ${activeplayer+1}`;
  activeplayer=activeplayer===0?1:0;//Can start play whoever
  activecolor();
  zeroCurrent();
  zeroScore();
})