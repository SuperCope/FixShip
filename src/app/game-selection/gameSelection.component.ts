import {
	Component,
	OnInit
} from '@angular/core';

@Component({
	selector: 'app-game',
	templateUrl: './gameSelection.component.html',
	styleUrls: ['./gameSelection.component.scss']
})
export class GameSelectionComponent implements OnInit {
	inputConnectedValue: string;

	displayIsConnected(data:string) {
		this.inputConnectedValue = data
	}

	ngOnInit(): void {

	}

}
