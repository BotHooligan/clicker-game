const tickRate = 1000 / 30; // 30 FPS

let score = 0;

let saw = new Building('Saw', 0.1, 1, 'buySaw')
let axe = new Building('Axe', 0.25, 15, 'buyAxe');
let chainsaw = new Building('Chainsaw', 1, 100, 'buyChainsaw');

function incScore(){
    score += saw.cps;
    score += axe.cps;
    score += chainsaw.cps;
}

function scorePlusPlus(){
    score++;
    
}

function updateButtons(){
    axe.buttonState();
    chainsaw.buttonState();
    saw.buttonState();
}

function updatePage(){
    incScore();
    updateButtons();
    document.getElementById("score").innerHTML = 
    Math.floor(score).toLocaleString();
}

setInterval(updatePage, tickRate);