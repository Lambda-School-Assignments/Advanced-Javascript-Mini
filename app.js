/* The four rules for 'this';
* in your own words. explain the four rules for the "this" keyword below.
* 1. 'this' points to global scope, unless otherwise told to
* 2. When an object's method is called, 'this' refers to the object left of the dot (obj.method)
* 3. When a constructor function is used, 'this' refers to the specific object instance that is created and returned by the constructor function
* 4. 'this' is explicity defined if .apply() or .call() is used
* write out a code example of each explanation above
*/

// First Rule
function foo() {
	console.log(this);
}

// Second Rule
const button = {
	name: 'leave the website',
	color: 'red',
	onClick: function() {
		console.log(`Are you sure? You're about to ${this.name}.`);
	}
};
button.onClick();

// Third Rule
class Obj {
	constructor(options) {
		this.type = options.type;
	}
	func() {}
}

// Fourth Rule * you may want to use your third rule's example to accomplish this
class Automobile {
	constructor(options) {
		this.type = options.type;
		this.make = options.make;
		this.model = options.model;
		this.color = options.color;
	}
	func() {
		console.log(`${this.make}, ${this.model}, ${this.color}`);
	}
}

const tesla = new Automobile({
	type: 'electric',
	make: 'Tesla',
	model: '3',
	color: 'matte black'
});
const ferrari = new Automobile({
	type: 'gas',
	make: 'Ferrari',
	model: '812',
	color: 'hot red'
});

tesla.func.call(ferrari);

// explain closure

function foo() {
	console.log(this); // what does this point to? The global or window scope
}

const counterFunction = () => {
	let count = 0; // <-- Closure
	// this code is broken. figure out why, and tell us where the closure is when you fix it
	const changeCount = value => {
		count += value;
	};
	return {
		increment: () => {
			changeCount(1);
		},
		decrement: () => {
			changeCount(-1);
		},
		total: () => {
			return count;
		}
	};
};
const counter = counterFunction();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
console.log(counter.total());

// create a constructor function called "Car"
// car takes an options object as its only argument
// your options object should have "make", "model", "year" properties on it
// assign these properties you pass in with options to the constructors 'this' object.
// add a speak() method to your object that when called will log out the car's make model and year.

class Car {
	constructor(options) {
		this.make = options.make;
		this.model = options.model;
		this.year = options.year;
	}
	speak() {
		console.log(`${this.make}, ${this.model}, ${this.year}`);
	}
}

// when you're done un comment the next few lines and run the file here in node `node app.js`.

const herby = new Car({ make: 'Volkswagen', model: 'Beetle', year: '1963' });
console.log(herby.speak());
const goldfinger = new Car({
	make: 'Aston Martin',
	model: 'DB5',
	year: '1964'
});
console.log(goldfinger.speak());

// once you get done with this, redo it all using the class keyword and a constructor function.

// extra credit

// we didn't touch on Recursion in the lecture yet, but you're going to build a recursive function now

let n = 10;
while (n >= 1) {
	console.log(n);
	n--;
}
// write a function called countDown that does the exact same thing as above, but calls itself until it can't anymore.
// hint-> your base case will look like the logic in the while loop.

const countDown = n => {
	if (n === 0) {
		console.log(0);
	} else {
		console.log(n);
		countDown(n - 1);
	}
};

countDown(10);
