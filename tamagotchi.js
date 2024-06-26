// Create class below
class Tamagotchi {
    constructor (name, energy = 9, full = 8, mood = 6, sick = false, rehomed = false) {
        this.name = name;
        this.energy = energy;
        this.full = full;
        this.mood = mood;
        this.sick = sick;
        this.rehomed = rehomed;
    }
    greet () {
        console.log(`Hello, I'm ${this.name}!`)
    }
    status () {
        console.log(`**********************\nMy energy is: ${this.energy}\nI am this full: ${this.full}\nMy mood is: ${this.mood}\n${this.sick===false ? "I am not sick ^(^_^)^" : "I am sick o(-_-)o"}\n**********************`)
    }
    eat () {
        this.full += 2;
        this.energy --;
        if (this.full > 10) {
            this.sick = true;
        }
    }
    medicate () {
        if (this.sick === true) {
            this.full = 9;
            this.energy -= 3;
            this.sick = false;
        } else {
            console.log("Ewww! I don't want medicine! ^(T_T)^")
            this.energy --;
        }
    }
    play () {
        if (this.sick) {
            console.log("I'm too sick to play! ^(T_T)^");
            this.mood --;
            this.energy --;
            return;
        } else if (this.mood > 9) { // lab instructions: will not play if mood is above 9
            this.energy -= 2;
            this.full --;
            return;
        } else if (this.energy <= 3) {
            console.log ("I am too tired to play");
            this.energy --;
            return;
        } else {
            this.mood += 2;
            this.energy --;
            this.full --;
        }
    }
    sleep () {
        this.energy += 4;
        this.full -= 3;
    }
    timePasses() {
        if(this.sick === false) {
            this.mood -= 2;
            this.full --;
            this.energy --;
        } else {
            this.mood -=3;
            this.full -=2;
            this.energy -=2;
        }
    }
    badGuardian() {
        if(this.energy <= 0 || this.mood <= 0 || this.full <= 0) {
            this.rehomed = true;
            console.log(`${this.name} has been rehomed due to neglect.`)
        }
    }
}
/* ---- Method for timePasses: ----
- if tamagotchi is not sick - mood decreases by 2, fullness and energy decrease by 1 -if tamagotchi is sick - mood decreases by 3, fullness and energy decrease by 2
*/
const tisa = new Tamagotchi('Tisa');
tisa.greet();
tisa.status();
tisa.eat();
tisa.status();
tisa.medicate();
tisa.eat();
tisa.status();
tisa.medicate();
tisa.status();
tisa.sleep();
tisa.status();
tisa.timePasses();
// Do not edit below this line
module.exports = Tamagotchi
