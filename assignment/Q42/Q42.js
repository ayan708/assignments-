// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
// Start with a copy of your program from Exercise 39.
// Make a array of magician’s names.
var magician = ["Zahid", "Haris", "sohail"];
// Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
var show_magicians = function (magician) {
    for (var _i = 0, magician_1 = magician; _i < magician_1.length; _i++) {
        var val = magician_1[_i];
        console.log(val);
    }
};
// Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
var make_great = function (magician) {
    for (var i = 0; i < magician.length; i++) {
        magician[i] = ("The Great ".concat(magician[i]));
    }
};
// call make_great
make_great(magician);
// Call show_magicians() to see that the list has actually been modified.
show_magicians(magician);
