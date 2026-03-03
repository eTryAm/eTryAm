let mode=document.querySelector(".mode");
const show=document.querySelector(".winner");
const input=document.querySelector(".userguess");
const reset=document.querySelector(".new-game");
let correctNumber=Math.floor(Math.random()*11);
input.addEventListener("input",()=>{
const value=Number(input.value);
if(input.value!="" && value===correctNumber){
show.style.visibility="visible";
}else{
show.style.visibility="hidden";
}
});
reset.addEventListener("click",()=>{
input.value="";
show.style.visibility="hidden";
correctNumber=Math.floor(Math.random()*11);
});
let currmode="light";
mode.addEventListener("click",() =>{
if(currmode==="light"){
currmode="dark";
document.querySelector("body").style.backgroundColor="black";
}else{
currmode="light";
document.querySelector("body").style.backgroundColor="white";
}
});
const motion=document.querySelector(".ball");
motion.addEventListener("click",() =>{
if(motion.style.animationPlayState==="running"){
motion.style.animationPlayState="paused";
}else{
motion.style.animationPlayState="running";
}
});