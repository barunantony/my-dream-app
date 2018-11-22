import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators, FormArray, ControlContainer } from '@angular/forms';

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
      'houseName': new FormControl(null, Validators.required),
      'postalCode': new FormControl(null),
      'cityName': new FormControl(null),
      'extraDetails': new FormArray([])
    });
  }

  onSubmitPersonalDetails () {
    console.log(this.personalDetailsForm);
  }

  onSubmitAddress () {
    console.log('address');
    console.log(this.addressForm);
  }

  addExtraDetails() {
    const control = new FormControl(null, [Validators.required, this.customDetailsValidator.bind(this)]);
    (<FormArray>this.addressForm.get('extraDetails')).push(control);

    console.log(this.addressForm.get('extraDetails'));
  }

  customDetailsValidator(formControl: FormControl): {[s: string]: boolean} {
    if (formControl.value && formControl.value.length > 50) {
      return { detailsReachedMaxLength: true };
    }
    return null;
  }
}
