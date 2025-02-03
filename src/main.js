const tickRate = 1000 / 30; // 30 FPS

let clickStrength = 5000;
let score = 0;

let saw = new Building("Saw", 0.1, 15);
let axe = new Building("Axe", 0.25, 100);
let chainsaw = new Building("Chainsaw", 1, 1000);
let dynamite = new Building("Dynamite", 2, 5000);
let harvester = new Building("Harvester", 5, 20000);
let hacker = new Building("Super Axe Hacker", 100, 100000);

let sharpenSaw = new sharpen("Sharpen Saw", 100, saw);
let sharpenAxe = new sharpen("Sharpen Axe", 500, axe);
let sharpenChainsaw = new sharpen("Sharpen Chainsaw", 2000, chainsaw);
let sharpenDynamite = new sharpen("More Dynamite", 15000, dynamite);
let sharpenHarvester = new sharpen("More arms for Harvester", 50000, harvester);
let sharpenHacker = new sharpen("Sharpen Super Axe Hacker", 1000000, hacker);

wps =
  saw.cps + axe.cps + chainsaw.cps + dynamite.cps + harvester.cps + hacker.cps;

//Update Score for each click
function scorePlusPlus() {
  score += clickStrength;
}

function incScore() {
  score += saw.cps;
  score += axe.cps;
  score += chainsaw.cps;
  score += dynamite.cps;
  score += harvester.cps;
  score += hacker.cps;
}

function updateButtons() {
  saw.buttonState();
  axe.buttonState();
  chainsaw.buttonState();
  dynamite.buttonState();
  harvester.buttonState();
  hacker.buttonState();
  sharpenSaw.buttonState();
  sharpenAxe.buttonState();
  sharpenChainsaw.buttonState();
  sharpenDynamite.buttonState();
  sharpenHarvester.buttonState();
  sharpenHacker.buttonState();
}

function updatePage() {
  incScore();
  updateButtons();
  wps =
    ((saw.cps +
      axe.cps +
      chainsaw.cps +
      dynamite.cps +
      harvester.cps +
      hacker.cps) *
      1000) /
    tickRate;

  //update score display
  document.getElementById("score").innerHTML =
    Math.floor(score).toLocaleString();
  document.getElementById("wps").innerHTML = wps.toLocaleString();
}

setInterval(updatePage, tickRate);
