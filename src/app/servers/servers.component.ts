import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styles: ['.gt5 { font-weight: bold }'],
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCount = 0;
  servers = [];
  serverTextAdded = '';

  sessionStorage = window.sessionStorage;

  constructor () {
    this.serverCount = sessionStorage && sessionStorage.length > 0 && sessionStorage.serverCount;

    setTimeout(() => {
      this.allowNewServer = !this.allowNewServer;
    }, 2000);
  }

  ngOnInit() {
  }

  onAddServer () {
    this.serverTextAdded = 'New server added';
    this.serverCount++;
    this.servers.push(this.servers.length);

    sessionStorage.setItem('serverCount', this.serverCount);
    sessionStorage.setItem('servers', this.servers);

    setTimeout(() => {
      this.serverTextAdded = '';
    }, 2000);
  }

}
