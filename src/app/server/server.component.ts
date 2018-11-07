import {
  Component, 
  Input, 
  OnInit,
  OnChanges,
  SimpleChanges,
  DoCheck,
  ElementRef,
  AfterContentInit,
  ContentChild,
} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: ['.online { color: white; }']
})
export class ServerComponent implements OnInit, OnChanges, DoCheck, AfterContentInit {
  availability = 'online';
  @Input() serverInput: {count: number, sometext:string};
  @Input() testInput: string;
  @ContentChild('childDiv') childContent: ElementRef;

  constructor () {
    this.availability =  Math.random() > 0.5 ? 'online' : 'offline';
    // console.log("constructor called.");
  }

  ngOnInit () {
    // console.log("ngOnInit called");
  } 

  ngOnChanges (changes: SimpleChanges) {
    // console.log('changes input');
    // for(var prop in changes) {
      // console.log(prop, changes[prop]);
    // }
  }

  ngDoCheck () {
    // console.log('ngDoCheck called');
  }

  ngAfterContentInit () {
    // console.log('child content: ', this.childContent.nativeElement.innerText);
  }
  
  getColor () {
    return this.availability === 'online' ? 'green' : 'red';
  }
}
