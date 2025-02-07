const tickRate = 1000 / 30; // 30 FPS

let clickStrength = 1;
let score = 0;

let saw = new Building("Saw", 0.1, 10);
let axe = new Building("Axe", 0.25, 75);
let chainsaw = new Building("Chainsaw", 1, 200);
let dynamite = new Building("Dynamite", 2, 500);
let harvester = new Building("Harvester", 5, 1000);
let hacker = new Building("Super Axe Hacker", 100, 5000);

let sharpenSaw = new sharpen("Sharpen Saw", 100, saw);
let sharpenAxe = new sharpen("Sharpen Axe", 500, axe);
let sharpenChainsaw = new sharpen("Sharpen Chainsaw", 1000, chainsaw);
let sharpenDynamite = new sharpen("More Dynamite", 2500, dynamite);
let sharpenHarvester = new sharpen("More arms for Harvester", 5000, harvester);
let sharpenHacker = new sharpen("Sharpen Super Axe Hacker", 10000, hacker);

let sharpenHands = new strengthen("Sharpen Hands", 200);
let sharpenHands2 = new strengthen("Saw Arms", 1000);
let sharpenHands3 = new strengthen("Axe Legs", 2750);
let sharpenHands4 = new strengthen("Chainsaw Head", 4000);
let sharpenHands5 = new strengthen("Laser Eyes", 5000);
let sharpenHands6 = new strengthen("Clone Yourself", 6000);
let sharpenHands7 = new strengthen("Explosive Diarrhea", 7000);

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
  sharpenHands.buttonState();
  sharpenHands2.buttonState();
  sharpenHands3.buttonState();
  sharpenHands4.buttonState();
  sharpenHands5.buttonState();
  sharpenHands6.buttonState();
  sharpenHands7.buttonState();
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
