/**
 * Our First Prototype Demo
 */

function Dog(name, breed, weight) {
	this.name = name;
	this.breed = breed;
	this.weight = weight;
}

Dog.prototype.species = 'carnivores';
Dog.prototype.bark = function(){
	if (this.weight > 25) {
		console.log(this.name + ' says Woof');
	} else {
		console.log(this.name + ' says Yip!');
	}
};


var kafka = new Dog('Kafka', 'Labrador', 38);

// Overriding prototype method bark()
kafka.bark = function() {
if (this.weight > 25) {
		console.log(this.name + ' says Woof!!!!!');
	} else {
		console.log(this.name + ' says Yip...');
	}
}


var freeda = new Dog('Freeda', 'Labrador', 30);
var diesel = new Dog('Diesel', 'Pug', 15);


console.log('We need attention here --- :');
console.log("kafka's bark property: " + kafka.hasOwnProperty('bark'));
console.log("freeda's bark property: " + freeda.hasOwnProperty('bark'));
console.log("diesel's bark property: " + diesel.hasOwnProperty('bark'));

console.log('Calling bark method here --- :');
kafka.bark();
freeda.bark();
diesel.bark();




