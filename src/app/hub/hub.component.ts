import {AfterViewInit, Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {SocketService} from "../shared/services/socket/socket.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Player} from "../shared/models/player.model";
import {HeaderComponent} from "../shared/components/header/header.component";
import {ButtonComponent} from "../shared/components/ship/dashboard/button/button.component";

@Component({
  selector: 'app-hub',
  templateUrl: './hub.component.html',
  styleUrls: ['./hub.component.scss']
})
export class HubComponent implements OnInit,AfterViewInit {
  @ViewChild('headerComponent') headerComponent: HeaderComponent;
  inputConnectedValue: string;

  player:Player
  rooms:any[];

  constructor(private socketService:SocketService,private route:ActivatedRoute) {
    this.socketService.setUI(this)
    this.socketService.getRooms()
  }
  createRoom(username:string){
    this.player.username = username;
    this.player.host = true

    console.log(this.player)
    this.socketService.createRoom(this.player)
  }



  ngOnInit(): void {


  }
  ngAfterViewInit(): void {
    this.player = this.headerComponent.player
    console.log(this.player)
  }

  displayIsConnected(data:string) {
    this.inputConnectedValue = data
  }

}
