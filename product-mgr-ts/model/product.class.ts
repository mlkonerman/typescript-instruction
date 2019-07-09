export class Product {
    id: number;
    code: string;
    description: string;
    price: number;

    constructor(inId: number = 0, inCode: string = "n/a", 
                inDescription: string = "n/a", inPrice: number = 0) {
        this.id = inId;
        this.code = inCode;
        this.description = inDescription;
        this.price = inPrice;
    }

    about(): string {
        return this.id + "/ " + this.code + "/ " + this.description + "/ " + this.price;
    }
        
}
