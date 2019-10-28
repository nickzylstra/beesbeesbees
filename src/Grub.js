const Grub = function Grub() {
  this.age = 0;
  this.color = 'pink';
  this.food = 'jelly';
};

Grub.prototype.eat = (food) => {
  console.log(`I ate the ${food}`);
};
