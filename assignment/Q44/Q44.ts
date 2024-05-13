// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

// write a function 

let func =(...item:string[])=>{

console.log("\nyour order is ready")
console.log("The item you added in your sandwich are ")
item.forEach(item =>console.log("-",item))
console.log ("Enjoy your sandwich")
}

// calling function

func("Tomato");
func("chicken","cheese");
func("Garlic","beef","hot sauce")
