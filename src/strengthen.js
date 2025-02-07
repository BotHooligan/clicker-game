class strengthen extends Upgrade {
  constructor(upgradeName, cost) {
    super(upgradeName, cost);
  }

  strengthen() {
    super.purchase();
    clickStrength *= 2;
  }

  buttonState() {
    super.buttonState();
    document.getElementById(this.buttonId).innerHTML =
      this.upgradeName +
      " (Cost: $" +
      Math.ceil(this.cost).toLocaleString() +
      ")" +
      "(2x wps per click)";
  }
}
