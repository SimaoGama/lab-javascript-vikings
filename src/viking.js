// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage) {
    super.receiveDamage(damage);
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return `Odin Owns You All!`;
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength, name) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage) {
    super.receiveDamage(damage);
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(viking) {
    this.vikingArmy.push(viking);
  }
  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  vikingAttack() {
    const randomViking = Math.floor(Math.random() * this.vikingArmy.length);
    const randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);

    const saxon = this.saxonArmy[randomSaxon];

    const vikingDamage = this.vikingArmy[randomViking].attack();

    let result = saxon.receiveDamage(vikingDamage);

    if (saxon.health <= 0) {
      this.saxonArmy.shift();
    }
    return result;
  }

  saxonAttack() {
    const randomViking = Math.floor(Math.random() * this.vikingArmy.length);
    const randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);

    const viking = this.vikingArmy[randomViking];

    const saxonDamage = this.saxonArmy[randomSaxon].attack();

    let result = viking.receiveDamage(saxonDamage);
    if (viking.health <= 0) {
      this.vikingArmy.shift();
    }
    return result;
  }

  showStatus() {
    if (!this.saxonArmy.length) {
      return 'Vikings have won the war of the century!';
    } else if (!this.vikingArmy.length) {
      return 'Saxons have fought for their lives and survived another day...';
    } else {
      return `Vikings and Saxons are still in the thick of battle.`;
    }
  }
}

const greatWar = new War();

console.log(greatWar.showStatus());
