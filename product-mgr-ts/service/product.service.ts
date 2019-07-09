import{ Product } from "../model/product.class"

export class ProductService {
    products: Product[] = [];
    nextId: number = 1;

    initializeList() {
        let p1: Product = new Product(1, "java", "Murach's Java", 57.50);
        let p2: Product = new Product(2, "sql", "Murach's SQL", 55.50);
        let p3: Product = new Product(3, "jquery", "Murach's jQuery", 54.50);

        this.products = [p1, p2, p3];
    }
    listProducts() {
        this.products.forEach(p => {
            console.log(p.about());            
        });
    }
    getProduct(id: number) {
        let product: Product = new Product;
        this.products.forEach(p => {
            if (p.id == id) {
                product = p;
            }            
        });
        if (product.id == 0) {
            console.log("No product found for id " + id)
        } else {
            console.log("You selected product: " + product.about());
        }
    }

    addProduct(newProduct: Product) {
        this.products.push(newProduct);
    }

    removeById(id: number) {
        this.products.forEach(p => {
            if (p.id == id) {
                let index: number = this.products.indexOf(p);
                this.products.splice(index, 1)
            }
        })
    }

}

