import {
  Component, 
  Input, 
  OnInit,
  OnChanges,
  SimpleChanges,
  DoCheck,
} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: ['.online { color: white; }']
})
export class ServerComponent implements OnInit, OnChanges, DoCheck {
  availability = 'online';
  @Input() serverInput: {count: number, sometext:string};
  @Input() testInput: string;

  constructor () {
    this.availability =  Math.random() > 0.5 ? 'online' : 'offline';
    console.log("constructor called.");
  }

  ngOnInit () {
    console.log("ngOnInit called");
  } 

  ngOnChanges (changes: SimpleChanges) {
    console.log('changes input');
    for(var prop in changes) {
      console.log(prop, changes[prop]);
    }
  }

  ngDoCheck () {
    console.log('ngDoCheck called');
  }

  getColor () {
    return this.availability === 'online' ? 'green' : 'red';
  }
}
