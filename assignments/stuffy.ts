export class Stuffy {
    id: number;
    type: string;
    color: string;
    size: string;
    limbs: number;
    

    constructor(i: number, t: string, c: string, s: string, l: number) {
        this.id = i;
        this.type = t;
        this.color = c;
        this.size = s;
        this.limbs = l;
    }

    about(): string {
        return this.id + " " + this.type + " " + this.color + " " + this.size + " " + this.limbs;
    }
}