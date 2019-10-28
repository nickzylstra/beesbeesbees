const Bee = function Bee() {
  // eslint-disable-next-line no-undef
  Grub.call(this);
  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing';
};

// eslint-disable-next-line no-undef
Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;
