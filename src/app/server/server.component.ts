import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: ['.online { color: white; }']
})
export class ServerComponent {
  availability = 'online';

  constructor () {
    this.availability =  Math.random() > 0.5 ? 'online' : 'offline';
  }

  getColor () {
    return this.availability === 'online' ? 'green' : 'red';
  }
}
