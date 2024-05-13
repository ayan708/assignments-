/*City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

"Lahore, Pakistan"

Call your function with at least three city-country pairs, and print the value that’s returned.*/
// Write a function called city_country() that takes in the name of a city and its country.
var city_country = function (city, country) {
    return "".concat(city, ",").concat(country);
};
// Call your function with at least three city-country pairs,
var city1 = city_country("karachi", "Pakistan");
var city2 = city_country("Newyork", "USA");
var city3 = city_country("Paris", "france");
// print the value that’s returned.
console.log(city1);
console.log(city2);
console.log(city3);
