// Object Constructor
function Dog(name, breed, weight) {
	this.name = name;
	this.breed = breed;
	this.weight = weight;
}

var kafka = new Dog('Kafka', 'Labrador', 18);


// We can add method to constructor as well
function Dog(name, breed, weight) {
	this.name = name;
	this.breed = breed;
	this.weight = weight;

	// method
	this. bark = function () {
		if (this.weight > 25) {
			alert(this.name + ' says Woof');
		} else {
			alert(this.name + ' says Yip!');
		}
	}
}

var kafka = new Dog('Kafka', 'Labrador', 38);
kafka.bark();



