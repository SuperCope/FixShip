import {
  AfterViewInit,
  Component, ComponentFactoryResolver,
  EventEmitter,
  Input,
  OnInit,
  Output, ViewChild, ViewContainerRef
} from '@angular/core';
import {ButtonComponent} from "./button/button.component";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit,AfterViewInit {


  @ViewChild('dashboard', { read: ViewContainerRef }) dashboardComponent: ViewContainerRef;
  constructor(private resolver: ComponentFactoryResolver) {
  }
  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.addElement(ButtonComponent)
    this.addElement(ButtonComponent)
  }


  addElement(element:any){

    let childComponent = this.resolver.resolveComponentFactory(element);

    this.dashboardComponent.createComponent(childComponent);
  }

}
