/*Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.*/

let Guest_list=['Ali','Ahmed','Zara','Fatima'];

//  Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

 
Guest_list.forEach((val:string)=>{
    console.log (val,"you are invited to the dinner tonight.")
});


let cannotmake=Guest_list[1];   // Old value
console.log(`${cannotmake} ,Unfortunately can not make to the party`);
 
Guest_list.splice(1,1,"Ayan");  // new value

console.log(`${Guest_list[1]}`,",will instead, come to the party" );

// Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

 let setofinvitation = Guest_list;

 console.log(`${setofinvitation},this is the new guest list`);

//  Print a second set of invitation messages, one for each person who is still in your list.
 Guest_list.forEach((val:string)=>{
    console.log (val,"you are invited to the dinner tonight.")
});