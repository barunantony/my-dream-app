import { Component, OnInit, ViewChild } from '@angular/core';
import { LoggingService } from 'src/utils/logging.service';
import { NgForm } from '@angular/forms';
import { ServerService } from 'src/utils/server.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styles: ['.gt5 { font-weight: bold }'],
})
export class ServersComponent implements OnInit {

  @ViewChild('f') serverForm: NgForm;
  allowNewServer = false;
  serverCount: number = 0;
  servers: {count: number, sometext: string}[] = [];
  serverTextAdded = '';
  serverName='default';

  sessionStorage = window.sessionStorage;

  constructor (private logService: LoggingService, private serverService: ServerService) {
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
    this.servers.push({count: this.servers.length, sometext: this.serverForm.value.serverName});
    this,this.serverForm.reset();

    sessionStorage.setItem('serverCount', this.serverCount.toString());
    sessionStorage.setItem('servers', JSON.stringify(this.servers));

    setTimeout(() => {
      this.serverTextAdded = '';
    }, 2000);

    this.logService.logMessage('server added. servercount: ' + this.serverCount);
  }

  logMsg(msg: string) {
    this.logService.logMessage(msg);
  }

  postServers() {
    this.serverService.addServers(this.servers).subscribe(
      (res) => {console.log(res)},
      (err) => {console.log(err)}
    );
  }

}
