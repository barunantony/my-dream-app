import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {

  @ViewChild('f') personalDetailsForm: NgForm;
  addressForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.addressForm = new FormGroup({
      'houseName': new FormControl(null),
      'postalCode': new FormControl(null),
      'cityName': new FormControl(null),
    });
  }

  onSubmitPersonalDetails () {
    console.log(this.personalDetailsForm);
  }

  onSubmitAddress () {
    console.log('address');
    console.log(this.addressForm);
  }
}
