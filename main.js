class Weapon {
  constructor(name, attack, durability, range) {
  this.name = name;
  this.attack = attack;
  this.durability = durability;
  this.range = range;
  }
  
  set takeDamage(damage) {
    this.durability = durability - damage;

  }
  get takeDamage() {
    return this._durability
  }
  
 takeDamage(damage) {
   this.durability = this.durability - damage;
 }

  isBroken() {
    if (durability !== 0) {
    return true;
    }
  }
  /* Скажите, пожалуйста, как правильно мне сделать isBroken()
  Совершенно не понимаю, как Вы делаете в одну строчку, 
  и функции вас понимают, что от них хотят
  */
  isBroken() {
    return durability !==0;
  }
}
  
const sword1 = new Weapon('Старый меч', 20, 10, 1);
  console.log(sword1);
  /* И тут не знаю, как лучше написать в одну строку, как sword1
  или объуктом, как arm1 и bow1 */

const arm1 = new Weapon({
  name: 'Рука',
  attack: 1,
  durability: Infinity,
  range: 1,
});
  
const bow1 = new Weapon({
  name: 'Лук',
  attack: 10,
  durability: 200,
  range: 3,
});
  
arm1.takeDamage(20);
console.log(arm1.durability); 
 
bow1.takeDamage(20);
console.log(bow1.durability); 
  
bow1.takeDamage(200);
console.log(bow1.durability); 

sword1.takeDamage(3);
console.log(sword.durability); 
  
sword1.takeDamage(10);
console.log(sword1.durability); 
  
class Sword extends Weapon {
  // super; ???
  //this. ???
}
class  Arm extends Weapon {
}
class Bow extends Weapon {
}
class Knife extends Weapon {
}
class Staff extends Weapon {
}

const stormStaff = new Sword();
console.log(stormStaff.durability);
const ax = new Knife();
console.log(ax.range);
const longBow = new Bow();
console.log(longBow.range);