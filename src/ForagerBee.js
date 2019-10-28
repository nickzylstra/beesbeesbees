const ForagerBee = function ForagerBee() {
  // eslint-disable-next-line no-undef
  Bee.call(this);
  this.age = 10;
  this.job = 'find pollen';
  this.canFly = true;
  this.treasureChest = [];
};

// eslint-disable-next-line no-undef
ForagerBee.prototype = Object.create(Bee.prototype);
ForagerBee.prototype.constructor = ForagerBee;

ForagerBee.prototype.forage = function forage(treasure) {
  this.treasureChest.push(treasure);
};
