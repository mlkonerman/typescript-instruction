"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Stuffy = /** @class */ (function () {
    function Stuffy(i, t, c, s, l) {
        this.id = i;
        this.type = t;
        this.color = c;
        this.size = s;
        this.limbs = l;
    }
    Stuffy.prototype.about = function () {
        return this.id + " " + this.type + " " + this.color + " " + this.size + " " + this.limbs;
    };
    return Stuffy;
}());
exports.Stuffy = Stuffy;
