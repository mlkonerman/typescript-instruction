import {Stuffy} from "./stuffy";

let stuffyList: Stuffy[] = [new Stuffy(1, "octopus", "blue", "large", 8), 
                            new Stuffy(2, "puppy", "pink", "small", 4),
                            new Stuffy(3, "turtle", "hot pink", "medium", 4), 
                            new Stuffy(4, "elephant", "purple", "large", 4), 
                            new Stuffy(5, "giraffe", "maroon", "medium", 4), 
                            new Stuffy(6, "panda", "red", "medium", 8), 
                        ]


for (let i = 0; i < stuffyList.length; i++) {
    console.log(stuffyList[i].about());
}