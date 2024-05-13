// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
// Make a array of magician’s names.
var magician = ["Zahid", "Haris", "sohail"];
// Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
var show_magicians = function (magician) {
    for (var _i = 0, magician_1 = magician; _i < magician_1.length; _i++) {
        var val = magician_1[_i];
        console.log(val);
    }
};
show_magicians(magician);
