/*Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!*/
var favorite_fruits = ["bananas", "apples", "oranges"];
if (favorite_fruits.includes("bananas")) {
    console.log("I really like bananas");
}
if (favorite_fruits.includes("apples")) {
    console.log("I really like apples");
}
if (favorite_fruits.includes("oranges")) {
    console.log("I really like oranges");
}
if (!favorite_fruits.includes("lemon")) {
    console.log("I don't like lemon");
}
if (!favorite_fruits.includes("watermelon")) {
    console.log("I don't like watermelon");
}
