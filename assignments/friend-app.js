"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var friend_1 = require("./friend");
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
var friendList = [new friend_1.Friend("Rachel Green", 30, "rgreen@ralphlauren.com", false),
    new friend_1.Friend("Ross Geller", 30, "geller_ross@nyu.edu", false),
    new friend_1.Friend("Monica Geller", 30, "chef@javu.com", false),
    new friend_1.Friend("Phoebe Buffay", 30, "pheebs@hotmail.com", true),
    new friend_1.Friend("Joey Tribbiani", 30, "tribbianij@nbc.com", false),
    new friend_1.Friend("Chandler Bing", 30, "chandler.bing@barkerads.com", false)];
for (var i = 0; i < 6; i++) {
    console.log(friendList[i]);
}
