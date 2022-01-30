import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  submitted = false;
  employeeForm =  this.formBuilder.group({
    email: ['',[Validators.required ,  Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/),]],
    password: [''],
    name: [''],
    number: ['',[Validators.required , Validators.minLength(10)]],
  });
  get f() {
    console.log('controls', this.employeeForm.controls);
    return this.employeeForm.controls;
  }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    
  }
  onSubmit() {
    this.submitted = true;
    // console.warn(this.employeeForm.value);
    if (this.employeeForm.invalid) {
      alert('enter properr dtals')
    }
else{
    console.log('this.employeeForm.value', this.employeeForm.value);
  }
  }
}
