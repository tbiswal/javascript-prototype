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

function ShowDog(name, breed, weight, handler) {
	// Optimisation
	Dog.call(this, name, breed, weight);
	this.handler = handler;
}

ShowDog.prototype = new Dog();
// Addintional steps
ShowDog.prototype.constructor = ShowDog;

// ShowDog prototype methods
ShowDog.prototype.groom = function() {
	console.log('Groom');
}

ShowDog.prototype.bait = function() {
	console.log('Bait');
}

ShowDog.prototype.gait = function() {
	console.log('Gait');
}


var roger = new ShowDog('Roger', 'Mix', 16, 'Cookie');
// ShowDog prototype method
roger.groom();

// Dog prototype method
roger.bark();

// Dog prototype property
console.log(roger.species);


var kafka = new Dog('Kafka', 'Labrador', 38);
kafka.bark();


/*
Few issues are here:
*/

console.log('Intersting fact to be checked here ---:')
if (kafka instanceof Dog) {
	console.log('Kafka is a Dog');
}

if (kafka instanceof ShowDog) {
	console.log('Kafka is a ShowDog');
}

if (roger instanceof Dog) {
	console.log('Roger is a Dog');
}

if (roger instanceof ShowDog) {
	console.log('Roger is a ShowDog');
}

console.log('Kafka constructor is ' + kafka.constructor);
console.log('Roger constructor is ' + roger.constructor);

// Here we can optimise redundancy of properties
// Let's fix that in next example