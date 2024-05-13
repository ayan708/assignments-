// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
var array = ["ali", "subhan", "Ayan"];
// check whether the arrY is empty or not
for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
    var val = array_1[_i];
    if (array.length > 0) {
        console.log("user", val);
    }
    else {
        console.log("We need to find user");
    }
}
// remove all user from the array 
var null_user = [];
for (var _a = 0, array_2 = array; _a < array_2.length; _a++) {
    var val = array_2[_a];
    if (null_user.length > 0) {
        console.log("user", val);
    }
    else {
        console.log("We need to find user");
    }
}
