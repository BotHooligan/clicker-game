const tickRate = 1000 / 30;

let score = 0;

let axe = new Building('Axe', 0.1, 15, 'buyAxe');

function incScore(){
    score += axe.cps;
}

function scorePlusPlus(){
    score++;
    
}

function updatePage(){
    incScore();
    document.getElementById("score").innerHTML = 
    Math.floor(score).toLocaleString();
}

setInterval(updatePage, tickRate);