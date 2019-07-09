"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stuffy_1 = require("./stuffy");
var stuffyList = [new stuffy_1.Stuffy(1, "octopus", "blue", "large", 8),
    new stuffy_1.Stuffy(2, "puppy", "pink", "small", 4),
    new stuffy_1.Stuffy(3, "turtle", "hot pink", "medium", 4),
    new stuffy_1.Stuffy(4, "elephant", "purple", "large", 4),
    new stuffy_1.Stuffy(5, "giraffe", "maroon", "medium", 4),
    new stuffy_1.Stuffy(6, "panda", "red", "medium", 8),
];
for (var i = 0; i < stuffyList.length; i++) {
    console.log(stuffyList[i].about());
}
