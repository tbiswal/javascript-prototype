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

console.log('Calling bark method here --- :');

kafka.bark();
freeda.bark();
diesel.bark();

Dog.prototype.sit = function(argument){
	console.log(this.name + ' is now sitting');
};

console.log('Checking new sit method here --- :');

kafka.sit();
freeda.sit();
diesel.sit();
