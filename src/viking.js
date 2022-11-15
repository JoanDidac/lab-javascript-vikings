// Soldier =========================>
class Soldier {

constructor(health, strength) {
this.health = health;
this.strength = strength;
}
 attack() {
    this.attack = this.strength;
    return this.attack;
}

 receiveDamage(damage){

    this.health = this.health - damage;//this.attack?
     //damage?? //this.health //health?
}
}



// Viking=================================>
class Viking extends Soldier {
    constructor(name,health,strength){
    super()
    this.name=name;
    this.health=health;
    this.strength=strength;
//this.strength = strength;
}

attack() {
    this.attack = this.strength;
    return this.attack;
}

receiveDamage(damage){

    this.health = this.health - damage;//this.attack?

    if ( this.health !== 0) {
      return `${this.name} has received ${damage} points of damage`;
    }
     if (this.health === 0) {
       return `${this.name} has died in act of combat`;
    }
    

}
battleCry() {
return `Odin Owns You All!`;
}
}




// Saxon ==========================================>

class Saxon extends Soldier {
    constructor (health,strength){
        super();
    this.health = health;
    this.strength = strength;
    
    }
    attack() {
        this.attack = this.strength;
        return this.attack;
    }
    receiveDamage(damage){

        this.health = this.health - damage;
    
        if (this.health === 0) {
            return `A Saxon has died in act of combat`;
        }
        if ( this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        }
    

}

}


// War
class War {
    constructor(){


    
    }
    vikingArmy = [];
    saxonArmy = [];

    addViking(axe){ //falta ahcer el push para que meta el nuevo soldier to the army tanto saxon como vikingo
    this.vikingArmy + 1;
    }
    addSaxon(sword){
    this.saxonArmy + 1;
    }
    vikingAttack(){
    this.health = this.health - this.strength;
    if ( this.health ===0) { this.saxonArmy = this.saxonArmy - 1}
    return //this.health - this.strength?
    }
    saxonAttack(){
        this.health = this.health - this.strength;
        if ( this.health ===0) { this.vikingArmy = this.vikingArmy - 1}
        return 
    }
    showStatus(){
    if (this.saxonArmy === 0 ) { //&& this.vikingArmy!== 0 ???
        return `Vikings have won the war of the century!`;
    }
    if (this.vikingArmy === 0) { //&& this.saxonArmy !== 0???
        return `Saxons have fought for their lives and survived another day...`;
    }
    else if(this.saxonArmy >= 1) { //&& this.vikingArmy >= 1
        return `Vikings and Saxons are still in the thick of battle.`;
    }
    }
}

