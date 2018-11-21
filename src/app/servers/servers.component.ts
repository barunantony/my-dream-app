import { Component, OnInit } from '@angular/core';
import { LoggingService } from 'src/utils/logging.service';
import { NgForm } from '@angular/forms';

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

  constructor (private logService: LoggingService) {
    this.serverCount = sessionStorage && sessionStorage.length > 0 && sessionStorage.serverCount;

    setTimeout(() => {
      this.allowNewServer = !this.allowNewServer;
    }, 2000);
  }

  ngOnInit() {
  }

  onAddServer (serverForm: NgForm) {
    this.serverTextAdded = 'New server added';
    this.serverCount++;
    this.servers.push({count: this.servers.length, sometext: serverForm.value.serverName});

    sessionStorage.setItem('serverCount', this.serverCount.toString());
    sessionStorage.setItem('servers', JSON.stringify(this.servers));

    setTimeout(() => {
      this.serverTextAdded = '';
    }, 2000);

    this.logService.logMessage('server added. servercount: ' + this.serverCount);
  }

}
