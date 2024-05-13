// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.

let array=["ali","subhan","Ayan"];

// check whether the arrY is empty or not
for(let val of array){

if(array.length>0){

console.log("user",val)

}

else{
   console.log("We need to find user")
}
}

// remove all user from the array 

let null_user:string[]=[];

for(let val of array){

    if(null_user.length>0){
    
    console.log("user",val)
    
    }
    
    else{
       console.log("We need to find user")
    }
    }