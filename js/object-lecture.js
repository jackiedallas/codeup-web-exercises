console.log("Are you ready for some OBJEEECCCTTTSSS!");
//What's going on with these objects?
//Well: an OBJECT is a grouping of data + functionality
//Our data. . we call properties [in a 'key:value' pair]
//Our functions . . we call methods.

//Let's set up an object and .log it to see what we're looking at:

var myCounty = { // <----- Object is myCounty
    name: "Bexar", //property
    countySeat: "San Antonio", //property
    currentPop: 2003554 //property
}

// console.log(myCounty);

var myDog = { // <----- Object is myDog
    name: "Fenix", //property
    age: 11, //property
    breed: "Pembroke Welsh Corgi" //property
}

// console.log(myDog);

//.log-ing the above gets us the object 'printed' or 'viewed' in the console where we can click into the object to see its shape [properties]

/*
* * * * * * * * * * * * * * * * * * * * * * * * * *
* New Object Instance vs. Object Literal Notation *
* * * * * * * * * * * * * * * * * * * * * * * * * *
*/

// We can call the 'constructor' for an object and use it to create our objects:
var myObject1 = new Object();
// console.log(myObject1)

//More often, we'll use this object literal notation structure as shown above and below:
var myObject2 = {};
// console.log(myObject2);

//* TODO: Create a new Object and call it 'myCar' using either way to do so shown above (object instance or object literal)
var myCar = {}
// console.log(myCar);
// That's great! But our car object doesn't have much going on, does it? There's no depth or meat to it - how can we fill our object in?

/*
* * * * * * * * * * * * * * * * * * * * * * * * * *
*                   Properties                    *
* * * * * * * * * * * * * * * * * * * * * * * * * *
*/

// We assign properties to objects - properties are pieces of data and fill in the guts / details of our object

//Let's take myCar. . and actually line out what my car is.

// We can use dot notation to do so:
myCar.make = 'bmw';
myCar.year = 2009;
// Or array notation:
myCar['model'] = 'x3';

//In general, dot notation is preferred of the two notations
//We can also set up our objects and properties/methods during object creation
// var sigOtherCar = {
//     make: 'chevrolet',
//     model: 'cruze',
//     year: '2020'
// }
console.log(myCar);
// console.log(sigOtherCar);

myCar.color = 'silver';
myCar.miles = 100000;
myCar.accidents = 'none';
myCar.value = 10000;
// TODO: Fill in your myCar object with properties of make, model, and year with the correct values. If you don't own a vehicle, fill in the details with your favorite vehicle.

//For me? I'm missing the year for myCar so. .

// console.log(myCar);

//Now I have a completed example of the myCar object - the model and make were added above in prior examples

/*
* * * * * * * * * * * * * * * * * * * * * * * * * *
*           Object Properties && Methods          *
* * * * * * * * * * * * * * * * * * * * * * * * * *
*/

//With our myCar objects set up, let's start utilizing them and diving into them!
//We can use dot notation or array notation in similar ways to start accessing these properties

//Let's share some information about our cars :)
var myCarYear = myCar.year;
// alert("My car year is " + myCarYear);

//We can tap into our prior understanding of assigning variables thus far and assign a property to a variable:

//What if we wanted to create a more complicated piece of data? Perhaps a list of our cars FEATURES?
myCar.features = ['climate control', 'leather', 'bluetooth', 'power steering', 'power windows', 'sunroof']

//Now we could do something like this. . a list of those features in the console
console.log(myCar.features);

for (let i = 0; i < myCar.features.length; i++) {
    console.log("Here's one of my cars features: " + myCar.features[i]);
}

// TODO: Add an array of features that your vehicle has!
// see line 101
//I already added an array of features above in the lecture, so I'm good to go.

//What about who owns our car? That could be an object itself if we think it through - the owner has a firstName and a lastName at the very least, right?
//Let's try nesting this object inside of our car object we've been building out

// TODO: Nest a 'carOwner' object of your own into this growing myCar object and console.log the results!
myCar.owner = {
    firstName: "jackie",
    lastName: "dallas",
    age: 29,
    dateOfBirth: "08/01/1992",
    registrationLocation: "Bexar County, Texas"
}
//An object can also contain within itself a method (function). We can set it up similarly to our properties, but with a value that is the function expression
// property: num
// property: 'string'
// * property: function() {.......} // NOTE: no function NAME!
var turnMyCarOn = function() {
    alert("Putting the key in the ignition and fired up the " + this.make + " " + this.model);
}

//Option A:
// myCar.turnOn = turnMyCarOn();

//Option B:
myCar.turnOn = function() {
    alert("Putting the key in the ignition and fired up the " + this.make + " " + this.model);
};
// myCar.turnOn();

/*
* * * * * * * * * * * * * * * * * * * * * * * * * *
*                 Arrays of Objects               *
* * * * * * * * * * * * * * * * * * * * * * * * * *
*/

//Let's tie some things together: Let's make a garage with another car!
var sigOtherCar = {
    make: 'chevrolet',
    model: 'cruze',
    year: '2020',
    turnOn: turnMyCarOn
}





//Now: loop through an ARRAY of OBJECTS, accessing our turnOn function for our vehicles
//Also note: we used the keyword *this* on the other vehicle's turnOn function, so this will be a good experiment to see the results
// garage.forEach(function (car){
//     car.turnOn();
// })

//One final TODO: A bigger task - set up your own garage and add at least another vehicle into it. Log your garage array to verify it contains the cars you want - once your garage has the right cars, write a loop to access some properties or a method from them!
// var dreamCar = {
//     speeding: speedTicket,
//     make: 'audi',
//     model: 'rs7',
//     trim: 'sportback',
//     year: 2022,
//     price: 100000,
//     acceleration: 3.5,
//     horsepower: 592,
//     fuel: 'premium'
// }
//
// dreamCar.features = ['valcona leather', 'panoramic sunroof', 'tire pressure monitoring system', 'cruise control'];
//
//
//
// var newgarage = [myCar, sigOtherCar, dreamCar];
// console.log(newgarage);
//
// var speedTicket = function() {
//     alert("I got a speeding ticket in my " + this.year + " " + this.make + " " + this.model + "." )
// }
//
// dreamCar.speeding = speedTicket()
//
// newgarage.forEach(function (car){
//     car.speedingTicket();
// })