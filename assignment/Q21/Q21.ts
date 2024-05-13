// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

interface item{

   Name:string,
   price:Number, 
   bought:boolean,

}

// two Objects

let Car:item={
    Name:"Lambo",
    price:120000,
    bought:false,
}

let fruit:item={

   Name:"apple",
   price:12,
   bought:true,
}

console.log(`Name:${Car.Name} \t price:${Car.price}\t bought:${Car.bought}`)
console.log(`Name:${fruit.Name}\t price:${fruit.price}\t bought:${fruit.bought}`)