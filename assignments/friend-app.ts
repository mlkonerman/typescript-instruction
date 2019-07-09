import {Friend} from "./friend";


// let f1: Friend = new Friend("Rachel Green", 30, "rgreen@ralphlauren.com", false);
// let f2: Friend = new Friend("Ross Geller", 30, "geller_ross@nyu.edu", false);
// let f3: Friend = new Friend("Monica Geller", 30, "chef@javu.com", false);
// let f4: Friend = new Friend("Phoebe Buffay", 30, "pheebs@hotmail.com", true);
// let f5: Friend = new Friend("Joey Tribbiani", 30, "tribbianij@nbc.com", false);
// let f6: Friend = new Friend("Chandler Bing", 30, "chandler.bing@barkerads.com", false);

// // console.log(f1);
// // console.log(f2);
// // console.log(f3);
// // console.log(f4);
// // console.log(f5);
// // console.log(f6);

// let list: Array<Friend> = [f1, f2, f3, f4, f5, f6];
// console.log(list[2]);
// for (let i = 0; i <= 5; i++) {
//     console.log(list[i]);
// }

let friendList: Friend[] = [new Friend("Rachel Green", 30, "rgreen@ralphlauren.com", false), 
                            new Friend("Ross Geller", 30, "geller_ross@nyu.edu", false),
                            new Friend("Monica Geller", 30, "chef@javu.com", false),
                            new Friend("Phoebe Buffay", 30, "pheebs@hotmail.com", true),
                            new Friend("Joey Tribbiani", 30, "tribbianij@nbc.com", false),
                            new Friend("Chandler Bing", 30, "chandler.bing@barkerads.com", false)]

for (let i = 0; i < 6; i++) {
    console.log(friendList[i]);
}