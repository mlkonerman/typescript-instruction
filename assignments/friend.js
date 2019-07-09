"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Friend = /** @class */ (function () {
    function Friend(n, a, e, bf) {
        this.friendName = n;
        this.age = a;
        this.email = e;
        this.bestFriend = bf;
    }
    Friend.prototype.about = function () {
        return this.friendName + " " + this.age + " " + this.email + " " + this.bestFriend;
    };
    return Friend;
}());
exports.Friend = Friend;
