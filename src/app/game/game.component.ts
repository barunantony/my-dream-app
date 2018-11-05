import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  oddOrEven: number = 0;
  intervalId;
  @Output('gameStartedEvent') startGame = new EventEmitter<{count: number}>();

  constructor() { }

  ngOnInit() {
  }

  onStart () {
    if (!this.intervalId) {
      this.intervalId = setInterval(() => {
        this.startGame.emit({count: this.oddOrEven++});
      }, 1000);
    }
  }

  onEnd () {
    this.intervalId && clearInterval(this.intervalId);
    this.intervalId = 0;
  }

}
