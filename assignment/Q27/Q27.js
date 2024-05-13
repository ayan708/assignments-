/*Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
•
 If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the appropriate color alien.*/
// vesion 1
var Alien_color = "green";
if (Alien_color === "green") {
    console.log("the player earned 5 points");
}
else if (Alien_color === "yellow") {
    console.log("the player earned 10 points");
}
else if (Alien_color == "red") {
    console.log("the player earned 15 points");
}
// version 2
Alien_color = "yellow";
if (Alien_color === "green") {
    console.log("the player earned 5 points");
}
else if (Alien_color === "yellow") {
    console.log("the player earned 10 points");
}
else if (Alien_color == "red") {
    console.log("the player earned 15 points");
}
// version 3
Alien_color = "red";
if (Alien_color === "green") {
    console.log("the player earned 5 points");
}
else if (Alien_color === "yellow") {
    console.log("the player earned 10 points");
}
else if (Alien_color == "red") {
    console.log("the player earned 15 points");
}
