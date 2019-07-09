export class Friend {
    friendName: string;
    age: number;
    email: string;
    bestFriend: boolean;

    constructor(n: string, a: number, e: string, bf: boolean) {
        this.friendName = n;
        this.age = a;
        this.email = e;
        this.bestFriend = bf;
    }

    about(): string {
        return this.friendName + " " + this.age + " " + this.email + " " + this.bestFriend;
    }
}