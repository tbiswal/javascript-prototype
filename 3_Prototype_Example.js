/**
 * Our First Prototype Demo
 */

function Dog(name, breed, weight) {
	this.name = name;
	this.breed = breed;
	this.weight = weight;
}

Dog.prototype.species = 'carnivores';

Dog.prototype.bark = function(argument){
	if (this.weight > 25) {
		console.log(this.name + ' says Woof');
	} else {
		console.log(this.name + ' says Yip!');
	}
};

var kafka = new Dog('Kafka', 'Labrador', 38);
var freeda = new Dog('Freeda', 'Labrador', 30);
var diesel = new Dog('Diesel', 'Pug', 15);


kafka.bark();
freeda.bark();
diesel.bark();


console.log(kafka.hasOwnProperty('name'));
console.log(kafka.hasOwnProperty('breed'));
console.log(kafka.hasOwnProperty('weight'));

console.log('We need attention here --- :');
console.log(kafka.hasOwnProperty('bark'));
console.log(freeda.hasOwnProperty('bark'));
console.log(diesel.hasOwnProperty('bark'));

console.log('Calling bark method here --- :');


console.log('Checking species here --- :');
console.log(kafka.species);
console.log(freeda.species);
console.log(diesel.species);

console.log('We need attention here for species value --- :');
console.log(kafka.hasOwnProperty('species'));
console.log(freeda.hasOwnProperty('species'));
console.log(diesel.hasOwnProperty('species'));

