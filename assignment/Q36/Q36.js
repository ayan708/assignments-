// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
// Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt.
var make_shirt = function (size, message) {
    console.log("You have bought a ".concat(size, " size T-shirt with \"").concat(message, "\" written on it"));
};
// Call the function
make_shirt("Large", "DON'T GIVE UP");
