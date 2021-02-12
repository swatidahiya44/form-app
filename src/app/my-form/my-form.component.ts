import { NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  name : any;
  designation : any;
  companyName : any;
  email : any;
  mobileNumber: any;


  constructor(private formBuilder: FormBuilder) { }


  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      designation: ['', Validators.required],
      companyName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      mobileNumber: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]
  });
  }
  
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    console.log(this.name);
    console.log(this.mobileNumber);



    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
}

}
