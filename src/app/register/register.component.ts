import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  constructor(
    private formBuilder: FormBuilder,

  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
        Name: ['', Validators.required],
        Email: ['', Validators.required],
        phone: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(6)]]
    });
} get f() { return this.registerForm.controls; }

onSubmit() {
    this.submitted = true;
  }

}
