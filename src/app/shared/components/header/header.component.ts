import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core'
import {ActivatedRoute, Router} from "@angular/router";
import {SocketService} from "../../services/socket/socket.service";
import {Player} from "../../models/player.model";

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

	player:Player;
	@Input() inputConnected:string;

	@Output() outputConnected:EventEmitter<string> = new EventEmitter();
	outputConnectedValue:string="Connecté"




	constructor(private socketService:SocketService,private router:ActivatedRoute) {
		this.player = new Player();

		var roomId:any = this.router.snapshot.paramMap.get('id');
		if (roomId) {
			this.player.roomId = roomId;
		}
	}


	connectSocket(id:string){
		this.player.socketId = id
	}
	setConnected(){
		this.outputConnected.emit(this.outputConnectedValue)
	}
	ngOnInit() {
		this.socketService.setHeader(this)
		this.socketService.connect()
	}




}
