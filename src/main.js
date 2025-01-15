const tickRate = 1000 / 30; // 30 FPS

let score = 0;

let saw = new Building('Saw', 0.1, 15, 'buySaw')
let axe = new Building('Axe', 0.25, 100, 'buyAxe');
let chainsaw = new Building('Chainsaw', 1, 1000, 'buyChainsaw');

let sharpenSaw = new Upgrade('SharpenSaw', 100, 2, 'sharpenSaw', 'Saw');
 


function scorePlusPlus(){
    score++;
}

function incScore(){
    score += saw.cps * sharpenSaw.multiplier;
    score += axe.cps;
    score += chainsaw.cps;

}

function updateButtons(){
    axe.buttonState();
    chainsaw.buttonState();
    saw.buttonState();
    sharpenSaw.buttonState();
}

function updatePage(){
    incScore();
    updateButtons();
    document.getElementById("score").innerHTML = 
    Math.floor(score).toLocaleString();

}

setInterval(updatePage, tickRate);