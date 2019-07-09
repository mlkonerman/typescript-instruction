import { Stuffy } from "./model/stuffy.class";
import{StuffyService} from "./stuffy.service";

export class StuffyComponent {
    stuffySvc: StuffyService;

    constructor(stuffySvc: StuffyService) {
        this.stuffySvc = stuffySvc;
    }
    
}
let stuffyComp = new StuffyComponent(new StuffyService());
//let stuffies: Stuffy[] = [];

//initialize the list using a function
stuffyComp.stuffySvc.initializeList();

//display the list of stuffies
stuffyComp.stuffySvc.listStuffies();

//get and display stuffy by id
let id: number = 7;
stuffyComp.stuffySvc.getStuffy(id);

//add a new stuffy
console.log("Add a new stuffy........")
let newStuffy: Stuffy = new Stuffy(6, "Elephant", "Hot Pink", "Small", 4);
stuffyComp.stuffySvc.addStuffy(newStuffy);
stuffyComp.stuffySvc.listStuffies();

//remove a stuffy by id
console.log("Remove.......")
id = 2;
stuffyComp.stuffySvc.removeById(id);
stuffyComp.stuffySvc.listStuffies();
