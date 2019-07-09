export class Stuffy {
    id: number;
    type: string;
    color: string;
    size: string;
    limbs: number;

    constructor(inId: number = 0, inType: string = "n/a", inColor: string = "n/a", inSize: string = "n/a", inLimbs: number = 0) {
        this.id = inId;
        this.type = inType;
        this.color = inColor;
        this.size = inSize;
        this.limbs = inLimbs;        
    }

    about(): string {
        return this.id + " " + this.type + " " + this.color + " " + this.size + " " + this.limbs;
    }
}