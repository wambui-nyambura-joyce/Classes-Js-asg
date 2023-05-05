// You are working on a web application for a car rental company. They want to keep track
// of their car inventory and rental information. Your task is to create a JavaScript class or
// function constructor for representing cars in their inventory and another one for
// representing rental information.
// Requirements:
// 1) Create a Car class or function constructor that has the following properties:
// a. make (string): The make of the car, e.g., "Toyota".
// b. model (string): The model of the car, e.g., "Camry".
// c. year (number): The year the car was manufactured, e.g., 2020.
// d. isAvailable (boolean): Indicates if the car is currently available for rent.
// The Car class or function constructor should also have a method called
// toggleAvailability that changes the isAvailable property to its opposite value (true to
// false, false to true)
class Car {
    constructor(make, model, year, isAvailable) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.isAvailable = isAvailable;
    }
    
    toggleAvailability() {
    this.isAvailable = !this.isAvailable;
    }
    }
    let car1 = new Car("Toyota", "mazda", 2020, true);
    console.log(car1);
    car1.toggleAvailability();
    console.log(car1);


    // question2
    // Create a Rental class or function constructor that has the following properties:
    // ● car (Car object): The car that has been rented.
    // ● renterName (string): The name of the person who rented the car.
    // ● rentalStartDate (Date object): The start date of the rental period.
    // ● rentalEndDate (Date object): The end date of the rental period.
    // The Rental class or function constructor should also have a method called
    // calculateRentalDuration that returns the rental duration in days.