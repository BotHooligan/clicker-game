class Upgrade{
    constructor(upgradeName, cost, upgradeMultiplier, buttonId, toolName){
        this.upgradeName = upgradeName;
        this.toolName = toolName;
        this.cost = cost;
        this.multiplier = 1;
        this.upgradeMultiplier = upgradeMultiplier;
        this.buttonId = buttonId;
        this.visible = false;
        this.bought = false;
    }

    purchase(){
        if (score>=this.cost){
            score -= this.cost;
        }
        this.bought = true;
        this.multiplier *= this.upgradeMultiplier;

    }

    buttonState(){
        if (this.bought)
        if (!this.visible){
            document.getElementById(this.buttonId).style.display = "none";
            
            if (score >= this.baseCost){
                this.visible = true;
                document.getElementById(this.buttonId).style.display = 'initial';
            }
        }


        document.getElementById(this.buttonId).innerHTML = this.upgradeMultiplier + 'x wood from' + '<br>' + this.toolName;
    }
}