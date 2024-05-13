// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
var countries = ["China", "USA", "UK", "Pakistan", "India"];
var num = 1;
console.log("list of countries:");
for (var _i = 0, countries_1 = countries; _i < countries_1.length; _i++) {
    var val = countries_1[_i];
    console.log(num++, val);
}
