// Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.

let describe_city=(city_name:string,country:string="unknown city")=>{

    console.log(`${city_name} is in ${country}`);
}

// Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.

describe_city("Karachi","Pakistan");
describe_city("Newyork","USA")
describe_city("Paris")