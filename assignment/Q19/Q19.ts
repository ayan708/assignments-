// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

var Guest_list = ['Ali', 'Ahmed', 'Zara', 'Fatima'];
//  Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
Guest_list.forEach(function (val) {
    console.log(val, "you are invited to the dinner tonight.");
});
// Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
var cannotmake = Guest_list[1]; // Old value
console.log("".concat(cannotmake, " ,Unfortunately can not make to the party"));
Guest_list.splice(1, 1, "Ayan"); // new value
console.log("".concat(Guest_list[1]), ",will instead, come to the party");
var setofinvitation = Guest_list;
console.log(setofinvitation, "this is the new guest list");
//  Print a second set of invitation messages, one for each person who is still in your list.
Guest_list.forEach(function (val) {
    console.log(val, "you are invited to the dinner tonight.");
});
// Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
console.log("I have found a bigger dinner table");
// Add one new guest to the beginning of your array.
Guest_list.unshift("Shyan");
console.log("The new list is", Guest_list);
//  Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list.
Guest_list.splice(Guest_list.length / 2, 0, "Danish");
console.log("another guest is added", Guest_list);
Guest_list.push("sufiyan");
console.log("after adding", Guest_list);
// Print a new set of invitation messages, one for each person in your list.
Guest_list.forEach(function (val) {
    console.log(val, "you are invited to the dinner tonight.");
});
//Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
console.log("Unfortunately the new dinning table won't arrive at time,so I can only invite two guest only ");
while (Guest_list.length > 2) {
    var removed = Guest_list.pop();
    console.log(removed, "sorry I could not invite you to the party ");
}
console.log(Guest_list);
// Print a message to each of the two people still on your list, letting them know they’re still invited.
Guest_list.forEach(function (val) {
    console.log(val, "you are still invited to the dinner tonight.");
});
//  Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
Guest_list.pop();
Guest_list.pop();
console.log(Guest_list, "Empty list");

// // Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

console.log(`The final number of guest that we are inviting is ${Guest_list.length} `)