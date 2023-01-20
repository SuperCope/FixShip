import {Material} from "./material.model";
import {Player} from "./player.model";

export class Tool extends Material{

	typeOp:string;
	constructor(owner:Player,typeOp:string) {
		super(owner);

		this.typeOp = typeOp;
	}
}
