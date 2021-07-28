var one = {
	name: 'object',
	say: function (greet) {
		console.log(greet + ', ' + this.name);
	}
};

//test
one.say('hi');

var two = {
	name: 'another object'
};

one.say.apply(two, ['hello']);

console.log(one.hasOwnProperty('say'));
console.log(two.hasOwnProperty('say'));