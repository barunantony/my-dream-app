import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
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
