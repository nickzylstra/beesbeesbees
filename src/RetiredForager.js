const RetiredForagerBee = function RetiredForagerBee() {
  ForagerBee.call(this);
  this.age = 40;
  this.job = 'gamble';
  this.canFly = false;
  this.color = 'grey';

};

RetiredForagerBee.prototype = Object.create(ForagerBee.prototype);
RetiredForagerBee.prototype.constructor = RetiredForagerBee;

RetiredForagerBee.prototype.forage = function forage() {
  return 'I am too old, let me play cards instead';
};

RetiredForagerBee.prototype.gamble = function gamble(treasure) {
  this.treasureChest.push(treasure);
};
