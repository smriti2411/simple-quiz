var skip = document.getElementById('skip');
var score=document.getElementById('score');
var totals = document.getElementById('totals');
var countdown = document.getElementById('count');
var count=0;
var scorecount=0;
var duration=0;
var set = document.querySelectorAll('.set');
var ans = document.querySelectorAll('.set .row');
function score1(){
    scorecount += 20;
    score.innerHTML = scorecount;
    totals.innerHTML = scorecount;
}
skip.addEventListener('click',function(){
    countdown.innerHTML = 0;
    duration = 0;
    step();
});
ans.forEach(function(anssingle){
    anssingle.addEventListener('click',function(){
    setTimeout(function(){
        step();
        duration = 10;
    },500)
   
    
    })
});
function step(){
    count+=1;
    for(var i=0;i< set.length;i++){
        set[i].className = 'set';
    }
    set[count].className = 'set active';
    if(count==4){
        skip.innerHTML = "Finish";
    }
    if(count==5){
        skip.style.display = 'none';
        clearInterval(durationtime);
        countdown.innerHTML = 0;
    }
}
var durationtime = setInterval(function(){
    if(duration == 10){
        duration = 0;
    }
    duration +=1;
    countdown.innerHTML =duration;
    
    if(countdown.innerHTML == "10"){
        step();
    }
},1000);
const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
document.body.classList.toggle('dark');

});