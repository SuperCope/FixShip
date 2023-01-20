import {Player} from "./player.model";
import {SharedObject} from "./sharedObject.model";
import {SharedStorage} from "./sharedStorage.model";

export class Game{

	players: Player[]
	sharedStorage: SharedStorage
    constructor(players:Player[]) {
        this.players = players;
    }
	create(){
		this.sharedStorage = new SharedStorage();

	}
}
