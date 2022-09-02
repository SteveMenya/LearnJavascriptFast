//making objects literall notation
var jjsCar = {
    make: 'Toyota',
    model: 'Prius',
    year: 2016,
    drive: function (speed) {
        console.log('Moving foward at ' + speed + ' mph');
    }
};

// accessing properties and functions in an object
console.log(jjsCar['model'])
jjsCar['drive'](50)

//using dot notation to access the same

console.log(jjsCar.model)
jjsCar.drive(60)

//adding properties

jjsCar.color = 'White';
jjsCar['sunRoof'] = false
console.log(jjsCar)

//deleting properties

delete jjsCar.year;
console.log(jjsCar)



//making objects using constructor. 
//capitalizing first letter of each word is know as PascalCasing
function CarObject(make, model, year, color, sunRoof) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.sunRoof = sunRoof;

    // this builds a drive() function for all objects built by this template. 
    //thi is not ideal.
    //use protototype
    // this.drive = function (speed) {
    //     console.log('Driving at a ' + speed + ' mph');
    // }
}
CarObject.prototype.drive = function(speed) {
    console.log('Driving at a ' + speed + ' mph');
}

CarObject.prototype.wheels = 4;


//creating objects from constructor
var briansCar = new CarObject('Honda', 'Civic', 2015, 'Blue', true)
var johnsCar = new CarObject('Ford', 'Mustang', 2017, 'Black', true)

//accessing the properties of ^^
console.log(briansCar.make)
briansCar.drive(60)
console.log(johnsCar.wheels)


//updating prototypes

briansCar.drive = function(speed) {
    console.log('Moving foward at ' + speed + "km/h")
}

johnsCar.drive(89);
briansCar.drive(58);