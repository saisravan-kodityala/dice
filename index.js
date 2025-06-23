var randomNumber1=Math.floor(Math.random()*6)+1;
var randomdice="images/dice"+randomNumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomdice);

var rand2=Math.floor(Math.random()*6)+1;
var rand2d="images/dice"+rand2+".png";
document.querySelectorAll("img")[1].setAttribute("src",rand2d);

if(randomNumber1>rand2)
{
    document.querySelector("h1").innerHTML="player 1 winsssss";
}
else if(rand2>randomNumber1){
    document.querySelector("h1").innerHTML="player 2 winsssss";
}
else{
    document.querySelector("h1").innerHTML="drawwwwwww";
}