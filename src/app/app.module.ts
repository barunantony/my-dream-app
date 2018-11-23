import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BasicHighlightDirective } from 'src/customDirectives/basic-highlight.directive';
import { BetterHighlightDirective } from 'src/customDirectives/better-highlight.directive';
import { LoggingService } from 'src/utils/logging.service';
import { ErrorAlertService } from 'src/utils/error-alert.service';
import { ShortenPipe } from 'src/utils/shorten.pipe';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { GameComponent } from './game/game.component';

import { ActiveInactiveUsersCompoent } from './active-inactive-users/active-inactive-users.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';

@NgModule({
  declarations: [
    ActiveInactiveUsersCompoent,
    AppComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    GameComponent,
    ServerComponent,
    ServersComponent,
    PersonalDetailsComponent,
    ShortenPipe
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ErrorAlertService, LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
