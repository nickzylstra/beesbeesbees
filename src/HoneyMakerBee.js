const HoneyMakerBee = function HoneyMakerBee() {
  // eslint-disable-next-line no-undef
  Bee.call(this);
  this.age = 10;
  this.job = 'make honey';
  this.honeyPot = 0;
};

// eslint-disable-next-line no-undef
HoneyMakerBee.prototype = Object.create(Bee.prototype);
HoneyMakerBee.prototype.constructor = HoneyMakerBee;

HoneyMakerBee.prototype.makeHoney = function () {
  this.honeyPot += 1;
  return this.honeyPot;
};

HoneyMakerBee.prototype.giveHoney = function () {
  this.honeyPot -= 1;
  return this.honeyPot;
};
