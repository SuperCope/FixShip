import {Component} from '@angular/core';
import { StatusService } from './shared/status.service';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'webapp';
	status = 'DOWN';

	constructor(private statusService: StatusService) { }
	ngOnInit(): void {
		this.statusService
		.getStatus()
		.then((result: any) => {
			console.log(result);
		});
		this.verifServ()
	}

	verifServ(){

		setInterval(function (){
			fetch("/api/status").then(function (res){
				if(res.status != 200){
					alert("DISCONNECTED")
				}
			})
		},2000)
	}
}
