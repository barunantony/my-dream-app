import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styles: ['.gt5 { font-weight: bold }'],
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCount: number = 0;
  servers: {count: number, sometext: string}[] = [];
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

  onAddServer (serverInputTextElement: HTMLInputElement) {
    this.serverTextAdded = 'New server added';
    this.serverCount++;
    this.servers.push({count: this.servers.length, sometext: serverInputTextElement.value});

    sessionStorage.setItem('serverCount', this.serverCount.toString());
    sessionStorage.setItem('servers', this.servers);

    setTimeout(() => {
      this.serverTextAdded = '';
    }, 2000);
  }

}
