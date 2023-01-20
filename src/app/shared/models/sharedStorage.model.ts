import {Material} from "./material.model";

export class SharedStorage{
    content:Material[];
	capacityMax:number;
	constructor() {
        this.content = [];
        this.capacityMax = 25;
    }
}
