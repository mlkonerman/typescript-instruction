"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Product = /** @class */ (function () {
    function Product(inId, inCode, inDescription, inPrice) {
        if (inId === void 0) { inId = 0; }
        if (inCode === void 0) { inCode = "n/a"; }
        if (inDescription === void 0) { inDescription = "n/a"; }
        if (inPrice === void 0) { inPrice = 0; }
        this.id = inId;
        this.code = inCode;
        this.description = inDescription;
        this.price = inPrice;
    }
    Product.prototype.about = function () {
        return this.id + "/ " + this.code + "/ " + this.description + "/ " + this.price;
    };
    return Product;
}());
exports.Product = Product;
