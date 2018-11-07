import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { GameComponent } from './game/game.component';
import { BasicHighlightDirective } from 'src/customDirectives/basic-highlight.directive';
import { BetterHighlightDirective } from 'src/customDirectives/better-highlight.directive';
import { LoggingService } from 'src/utils/logging.service';
import { ErrorAlertService } from 'src/utils/error-alert.service';
import { ActiveInactiveUsersCompoent } from './active-inactive-users/active-inactive-users.component';
import { MaintainUserStatusService } from 'src/utils/maintain-user-status.service';

@NgModule({
  declarations: [
    ActiveInactiveUsersCompoent,
    AppComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    GameComponent,
    ServerComponent,
    ServersComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ErrorAlertService, LoggingService, MaintainUserStatusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
