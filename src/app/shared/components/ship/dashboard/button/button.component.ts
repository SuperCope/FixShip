import {Component, EventEmitter, Input, OnInit, Output, ViewChild, ViewContainerRef} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  srcImg:string;

  @Input() inputButton:string;
  @Output() outputButton:EventEmitter<string> = new EventEmitter();

  @ViewChild('button', {
    read: ViewContainerRef
  }) button:any;
  buttonState:string="unpushed"
  constructor() {
    this.srcImg = "assets/svg/shipComponents"
  }


  ngOnInit(): void {
  }
  push(event:Event){
    this.buttonState = "pushed"
  }
  unpush(event:Event){
    this.buttonState = "unpushed"
  }
}
