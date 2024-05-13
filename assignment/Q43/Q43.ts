// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.


// Start with your work from Exercise 40.

let show_magicians=(magician:string[])=>{

    for(let val  of magician){
  
      console.log(val);
    }
  }

  let make_great=(magician:string[])=>{

   return magician.map(magician => "The Great" +magician)

}

// Define magician name

let magician:string[] =["Ayan","jack","suhail"]

let make_great1:any=make_great([...magician])

// orignal array
console.log("ORIGNAL MAGICIAN:")
show_magicians(magician)


// changed array
console.log("CHANGED MAGICIANS:")
show_magicians(make_great1)
