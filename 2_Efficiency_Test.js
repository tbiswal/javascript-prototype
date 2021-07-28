function Dog(name, breed, weight) {
	this.name = name;
	this.breed = breed;
	this.weight = weight;

	// method
	this. bark = function () {
		if (this.weight > 25) {
			console.log(this.name + ' says Woof');
		} else {
			console.log(this.name + ' says Yip!');
		}
	}
}

var kafka = new Dog('Kafka', 'Labrador', 38);
var freeda = new Dog('Freeda', 'Labrador', 30);
var diesel = new Dog('Diesel', 'Pug', 15);

kafka.bark();
freeda.bark();
diesel.bark();


console.log("Checking kafka's name property: " + kafka.hasOwnProperty('name'));
console.log("Checking kafka's breed property: " + kafka.hasOwnProperty('breed'));
console.log("Checking kafka's weight property: " + kafka.hasOwnProperty('weight'));

console.log("Checking kafka's bark property: " + kafka.hasOwnProperty('bark'));

console.log("Checking Diesel's name property: " + diesel.hasOwnProperty('name'));
console.log("Checking Diesel's breed property: " + diesel.hasOwnProperty('breed'));
console.log("Checking Diesel's weight property: " + diesel.hasOwnProperty('weight'));

console.log("Checking Diesel's bark property: " + diesel.hasOwnProperty('bark'));



