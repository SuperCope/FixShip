import {Player} from "./player.model";

export class Material{

	owner:Player;
    constructor(owner:Player) {
        this.owner = owner;
    }
}
