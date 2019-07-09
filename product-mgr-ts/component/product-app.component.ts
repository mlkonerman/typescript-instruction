import {Product} from "../model/product.class"
import {ProductService} from "../service/product.service"

export class ProductComponent {
    productSvc: ProductService;
    constructor(productSvc: ProductService) {
        this.productSvc = productSvc;
    }
}

let productComp = new ProductComponent(new ProductService());
let products: Product[] = [];

productComp.productSvc.initializeList();

console.log("------LIST PRODUCTS------")
productComp.productSvc.listProducts();

console.log("------GET BY ID------")
let id: number = 1;
productComp.productSvc.getProduct(id);


console.log("------ADD PRODUCT------")
let newProduct: Product = new Product(4, "net", "Murach's .Net", 57.50);
productComp.productSvc.addProduct(newProduct);
productComp.productSvc.listProducts();


console.log("------DELETE PRODUCT------")
id = 2;
productComp.productSvc.removeById(id);
productComp.productSvc.listProducts();

