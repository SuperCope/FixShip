import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from "./app.component";
import {GameSelectionComponent} from "./game-selection/gameSelection.component";
import {DashboardComponent} from "./shared/components/ship/dashboard/dashboard.component";
import {HubComponent} from "./hub/hub.component";


// @ts-ignore
const routes: Routes = [
	{
		path: '',
		component: AppComponent,
	},
	{
		path: 'hub',
		component: HubComponent,
	},
	{
		path: 'game/:id',
		component: GameSelectionComponent,
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {

}
