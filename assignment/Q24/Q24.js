/* More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array.*/
// assign
var Name = 'ayan';
var num = 23;
var arr = [12, 13, 14, 15, 16];
// Tests for equality and inequality with strings
// equality
// True
console.log("Name == 'ayan'");
console.log(Name == 'ayan');
// false
console.log("Name=='Ali'");
console.log(Name == 'Ali');
// inequality
// True
console.log("Name!='Ali'");
console.log(Name != 'Ali');
// False
console.log("Name!='ayan'");
console.log(Name != 'ayan');
// Tests using the lower case function
// True
console.log("Name.toLowerCase()=ayan");
console.log(Name.toLowerCase() == 'ayan');
// false
console.log("Name.toLowerCase()=Ayan");
console.log(Name.toLowerCase() == 'Ayan');
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// equality
// true
console.log("num==23");
console.log(num == 23);
// false
console.log("num==24");
console.log(num == 24);
// inequality
// true
console.log("num!=24");
console.log(num != 24);
// false
console.log("num!=23");
console.log(num != 23);
// greater than
// True
console.log("num>21");
console.log(num > 21);
// False
console.log("num>25");
console.log(num > 25);
// Less than
// true
console.log("num<25");
console.log(num < 25);
// false
console.log("num<21");
console.log(num < 21);
// greater than  or is equal to
// true
console.log("num>=23");
console.log(num >= 23);
// false
console.log("num>=25");
console.log(num >= 25);
// less than or is equal to
// true
console.log("num<=23");
console.log(num <= 23);
// false
console.log("num<=19");
console.log(num <= 19);
// Test whether an item is in a array
// true
console.log("arr.include(14)");
console.log(arr.includes(14));
// false
console.log("arr.include(23)");
console.log(arr.includes(23));
// Test whether an item is not in a array.
// true
console.log("!arr.include(29)");
console.log(!arr.includes(29));
// false
console.log("!arr.include(16)");
console.log(!arr.includes(16));
//                                                END
