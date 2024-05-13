/*City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

"Lahore, Pakistan"

Call your function with at least three city-country pairs, and print the value that’s returned.*/

// Write a function called city_country() that takes in the name of a city and its country.

let city_country=(city:string,country:string)=>{
     return `${city},${country}`
}

// Call your function with at least three city-country pairs,

let city1:string=city_country("karachi","Pakistan");
let city2:string=city_country("Newyork","USA");
let city3:string=city_country("Paris","france");

// print the value that’s returned.

console.log(city1);
console.log(city2);
console.log(city3);