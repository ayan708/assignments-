// Seeing the World: Think of at least five places in the world you’d like to visit.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
var favourite_locations = ["Madagascar", "China", "Japan", "USA", "Algeria"];
// • Print your array in its original order.
console.log("Orignal", favourite_locations);
// • Print your array in alphabetical order without modifying the actual list.
console.log('alphabetical', __spreadArray([], favourite_locations, true).sort());
// • Show that your array is still in its original order by printing it.
console.log("Orignal", favourite_locations);
// • Print your array in reverse alphabetical order without changing the order of the original list.
console.log("Reverse alphabetical order", __spreadArray([], favourite_locations, true).sort().reverse());
// • Show that your array is still in its original order by printing it again.
console.log("Orignal", favourite_locations);
// • Reverse the order of your list. Print the array to show that its order has changed.
favourite_locations.reverse();
console.log("Reversed", favourite_locations);
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
favourite_locations.reverse();
console.log("Reversed than Reversed = Orignal", favourite_locations);
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
favourite_locations.sort();
console.log("alphabetical", favourite_locations);
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
favourite_locations.sort().reverse();
console.log("reverse alphebetical order", favourite_locations);
