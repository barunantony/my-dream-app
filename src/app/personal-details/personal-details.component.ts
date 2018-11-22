import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {

  @ViewChild('f') personalDetailsForm: NgForm;

  constructor() { }

  ngOnInit() {
  }

  onSubmit () {
    console.log(this.personalDetailsForm);
  }
}
