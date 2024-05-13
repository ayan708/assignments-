// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

// Make a array of magician’s names.

let magician=["Zahid","Haris","sohail"];

// Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

let show_magicians=(magician:string[])=>{

  for(let val  of magician){

    console.log(val);
  }
}

show_magicians(magician);