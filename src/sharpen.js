class sharpen extends Upgrade {
  constructor(upgradeName, cost, building) {
    super(upgradeName, cost);
    this.building = building;
    this.buildingName = building;
  }

  purchase() {
    super.purchase();
    this.building.doubleUpgrade++;
    this.building.applyDU();
  }

  buttonState() {
    super.buttonState();
    document.getElementById(this.buttonId).innerHTML =
      this.upgradeName +
      " (Cost: $" +
      Math.ceil(this.cost).toLocaleString() +
      ")" +
      "(2x wps)";
  }
}
