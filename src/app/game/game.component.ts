import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ErrorAlertService } from 'src/utils/error-alert.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  oddOrEven: number = 0;
  intervalId;
  alertMessage: string;
  @Output('gameStartedEvent') startGame = new EventEmitter<{count: number}>();

  constructor(private errorAlert: ErrorAlertService) {
    this.errorAlert.alertError.subscribe((event) => {
      this.alertMessage = event;
      setTimeout(() => this.alertMessage = '', 2000);
    });
   }

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
