import { Component } from '@angular/core';
import { ErrorAlertService } from 'src/utils/error-alert.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-dream-app';
  name = "ABC";
  age = "12";
  game = {};

  constructor(private errorAlert: ErrorAlertService) {}

  onGameStart (event: {count: number}) {
    this.game['count'] = event.count;

    // simply emit error on a condition
    event.count % 10 === 0 && this.errorAlert.alertError.emit(`Its been ${event.count}secs`);
  }
}
