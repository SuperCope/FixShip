import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {CommonModule} from '@angular/common'
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {GameSelectionComponent} from './game-selection/gameSelection.component';
import {HttpModule} from "@angular/http";
import {SocketIoConfig, SocketIoModule} from "ngx-socket-io";
import {environment} from "../../environment";
import {Player} from "./shared/models/player.model";
import {HeaderComponent} from "./shared/components/header/header.component";
import {FormsModule} from "@angular/forms";
import {SocketService} from "./shared/services/socket/socket.service";
import {FooterComponent} from "./shared/components/footer/footer.component";
import {ButtonComponent} from './shared/components/ship/dashboard/button/button.component';
import {GraduatedButtonComponent} from './shared/components/ship/dashboard/graduated-button/graduated-button.component';
import {DashboardComponent} from './shared/components/ship/dashboard/dashboard.component';
import { HubComponent } from './hub/hub.component';

const config: SocketIoConfig = {
    url: environment.socketUrl, // socket server url;
    options: {
        transports: ['websocket']
    }
}

@NgModule({
    declarations: [
        AppComponent,
        GameSelectionComponent,
        HeaderComponent,
        FooterComponent,
        GraduatedButtonComponent,
        DashboardComponent,
        ButtonComponent,
        HubComponent
    ],
    imports: [
        SocketIoModule.forRoot(config),
        BrowserModule,
        AppRoutingModule,
        CommonModule,
        HttpModule,
        FormsModule
    ],
    providers: [Player],
    bootstrap: [AppComponent],
})

export class AppModule {
}
