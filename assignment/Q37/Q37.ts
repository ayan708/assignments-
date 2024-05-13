// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

let make_shirt=(size:string,message:string)=>{

    console.log(`You have bought a ${size} size T-shirt with "${message}" written on it`)
}

// Make a large shirt and a medium shirt with the default message,

make_shirt("Large","I LOVE TYPESCRIPT")

make_shirt("Medium","I LOVE TYPESCRIPT")

// a shirt of any size with a different message.

make_shirt("Small","DON'T GIVE UP")

