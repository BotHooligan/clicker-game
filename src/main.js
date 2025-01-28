const tickRate = 1000 / 30; // 30 FPS

let clickStrength = 1;
let score = 500;



let saw = new Building('Saw', 0.1, 15);
let axe = new Building('Axe', 0.25, 100);
let chainsaw = new Building('Chainsaw', 1, 1000);

let sharpenSaw = new sharpen('Sharpen Saw', 100, saw);

let sharpenAxe = new sharpen('Sharpen Axe', 500, axe);
//Update Score for each click
function scorePlusPlus(){
    score += clickStrength;
}


function incScore(){
    score += saw.cps;
    score += axe.cps;
    score += chainsaw.cps;
}

function updateButtons(){
    saw.buttonState();
    axe.buttonState();
    chainsaw.buttonState();
    sharpenSaw.buttonState();
    sharpenAxe.buttonState();

}

function updatePage(){
    incScore();
    updateButtons();

    //update score display
    document.getElementById("score").innerHTML = 
    Math.floor(score).toLocaleString();
}

setInterval(updatePage, tickRate);