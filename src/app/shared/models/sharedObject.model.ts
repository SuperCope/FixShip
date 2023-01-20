import {Player} from "./player.model";
import {Material} from "./material.model";

export class SharedObject{

	materials:Material[];
    constructor(materials:Material[]) {
        this.materials = materials;
    }

    getObjectBySender(player:Player){
        for(let i = 0;i<this.materials.length;i++){
            if(this.materials[i].owner == player){
                return this.materials[i];
            }
        }
		return null;
    }
    shareObjectWith(player:Player,material:Material){
		material.owner = player;
        this.materials.push(material)
    }
}
