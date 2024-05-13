// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
// two Objects
var Car = {
    Name: "Lambo",
    price: 120000,
    bought: false,
};
var fruit = {
    Name: "apple",
    price: 12,
    bought: true,
};
console.log("Name:".concat(Car.Name, " \t price:").concat(Car.price, "\t bought:").concat(Car.bought));
console.log("Name:".concat(fruit.Name, "\t price:").concat(fruit.price, "\t bought:").concat(fruit.bought));
