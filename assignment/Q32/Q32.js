// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
var current_users = ["Ayan", "FARHAN", "Saad", "Ali", "danish", "sara", "AHMED"];
var new_user = ["fahad", "abdullah", "tayyab", "Hamza", "Farhan", "Ali", "AHMED"];
// convert both the user name for case sensetive
for (var _i = 0, new_user_1 = new_user; _i < new_user_1.length; _i++) {
    var new_username = new_user_1[_i];
    var user = new_username.toLowerCase();
    console.log(user);
    var found = false;
    for (var _a = 0, current_users_1 = current_users; _a < current_users_1.length; _a++) {
        var existing_user = current_users_1[_a];
        if (existing_user.toLowerCase() === user) {
            found = true;
        }
    }
    if (found) {
        console.log("the ".concat(new_username, " is not available,enter a new username"));
    }
    else {
        console.log("the ".concat(new_username, " is available."));
    }
}
