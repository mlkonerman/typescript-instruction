"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var product_class_1 = require("../model/product.class");
var ProductService = /** @class */ (function () {
    function ProductService() {
        this.products = [];
        this.nextId = 1;
    }
    ProductService.prototype.initializeList = function () {
        var p1 = new product_class_1.Product(1, "java", "Murach's Java", 57.50);
        var p2 = new product_class_1.Product(2, "sql", "Murach's SQL", 55.50);
        var p3 = new product_class_1.Product(3, "jquery", "Murach's jQuery", 54.50);
        this.products = [p1, p2, p3];
    };
    ProductService.prototype.listProducts = function () {
        this.products.forEach(function (p) {
            console.log(p.about());
        });
    };
    ProductService.prototype.getProduct = function (id) {
        var product = new product_class_1.Product;
        this.products.forEach(function (p) {
            if (p.id == id) {
                product = p;
            }
        });
        if (product.id == 0) {
            console.log("No product found for id " + id);
        }
        else {
            console.log("You selected product: " + product.about());
        }
    };
    ProductService.prototype.addProduct = function (newProduct) {
        this.products.push(newProduct);
    };
    ProductService.prototype.removeById = function (id) {
        var _this = this;
        this.products.forEach(function (p) {
            if (p.id == id) {
                var index = _this.products.indexOf(p);
                _this.products.splice(index, 1);
            }
        });
    };
    return ProductService;
}());
exports.ProductService = ProductService;
