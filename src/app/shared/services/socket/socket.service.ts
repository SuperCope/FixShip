import {EventEmitter, Injectable, Input, Output} from '@angular/core';
import {Socket} from "ngx-socket-io";
import {Player} from "../../models/player.model";
import {addWarning} from "@angular-devkit/build-angular/src/utils/webpack-diagnostics";
import {HubComponent} from "../../../hub/hub.component";
import {HeaderComponent} from "../../components/header/header.component";

@Injectable({
  providedIn: 'root'
})
export class SocketService {


	hub:HubComponent;
	header:HeaderComponent;

	constructor(private socket: Socket) {

	}
	connect(){
		console.log(this.socket)
		this.socket.connect()
		this.bindSocket()
	}

	getSocket(){
		return this.socket;
	}
	setUI(affichage:HubComponent){
		this.hub = affichage;
	}
	setHeader(header:HeaderComponent){
		this.header = header;
	}
	getRooms(){
		this.socket.emit('get rooms');
	}
	createRoom(player:Player){
		this.socket.emit('new', player);
	}
	accessRoom(){
		// this.socket.emit('new', this.player);
	}
	bindSocket() {

		this.socket.on('confirmConnection', (rooms:any) => {
			this.header.setConnected()
			this.header.connectSocket(this.socket.ioSocket.id)
		})
		this.socket.on('list rooms', (rooms: any) =>{
			console.log(rooms[0])
			this.hub.rooms = rooms
		});
		this.socket.on('join room', (roomId:string) => {
			this.hub.player.roomId = roomId;
			console.log(this.hub.player)
			let linkToShare = `<a href="${window.location.href}?id=${this.hub.player.roomId}" target="_blank">${window.location.href}?room=${this.hub.player.roomId}</a>`;
		});
		this.socket.on('start game', (players:Player[]) => {
			console.log(players)

		});
	}

}
