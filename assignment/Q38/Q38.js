// Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
var describe_city = function (city_name, country) {
    if (country === void 0) { country = "unknown city"; }
    console.log("".concat(city_name, " is in ").concat(country));
};
// Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
describe_city("Karachi", "Pakistan");
describe_city("Newyork", "USA");
describe_city("Paris");
