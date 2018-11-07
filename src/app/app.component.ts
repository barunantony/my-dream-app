import { Component } from '@angular/core';
import { LoggingService } from 'src/utils/logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoggingService],
})
export class AppComponent {
  title = 'my-dream-app';
  name = "ABC";
  age = "12";
  game = {};

  onGameStart (event: {count: number}) {
    this.game['count'] = event.count;
  }
}
