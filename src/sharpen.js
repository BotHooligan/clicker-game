class sharpen extends Upgrade{
    constructor(upgradeName, cost, building) {
        super(upgradeName, cost);
        this.building = building;
    }

    purchase(){
        super.purchase();
        this.building.doubleUpgrade++;
        this.building.applyDU();
    }
}