// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Start with your work from Exercise 40.
var show_magicians = function (magician) {
    for (var _i = 0, magician_1 = magician; _i < magician_1.length; _i++) {
        var val = magician_1[_i];
        console.log(val);
    }
};
var make_great = function (magician) {
    return magician.map(function (magician) { return "The Great" + magician; });
};
// Define magician name
var magician = ["Ayan", "jack", "suhail"];
var make_great1 = make_great(__spreadArray([], magician, true));
// orignal array
console.log("ORIGNAL MAGICIAN:");
show_magicians(magician);
// changed array
console.log("CHANGED MAGICIANS:");
show_magicians(make_great1);
