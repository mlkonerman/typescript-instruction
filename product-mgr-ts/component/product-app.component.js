"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var product_class_1 = require("../model/product.class");
var product_service_1 = require("../service/product.service");
var ProductComponent = /** @class */ (function () {
    function ProductComponent(productSvc) {
        this.productSvc = productSvc;
    }
    return ProductComponent;
}());
exports.ProductComponent = ProductComponent;
var productComp = new ProductComponent(new product_service_1.ProductService());
var products = [];
productComp.productSvc.initializeList();
console.log("------LIST PRODUCTS------");
productComp.productSvc.listProducts();
console.log("------GET BY ID------");
var id = 1;
productComp.productSvc.getProduct(id);
console.log("------ADD PRODUCT------");
var newProduct = new product_class_1.Product(4, "net", "Murach's .Net", 57.50);
productComp.productSvc.addProduct(newProduct);
productComp.productSvc.listProducts();
console.log("------DELETE PRODUCT------");
id = 2;
productComp.productSvc.removeById(id);
productComp.productSvc.listProducts();
