export class Player{

	host:boolean;
	roomId:string;
	username:string;
	socketId:string;
    constructor() {
        this.host = false;
        this.roomId = "";
        this.username = "";
        this.socketId = "";
    }
}
