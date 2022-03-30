import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  PatternValidator,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  form!: FormGroup;
  formValues: string[] = [];
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      socialSecurityNumber: ['', Validators.required],
      sex: ['', Validators.required],
    });
  }
  submitForm() {
    if (this.form.valid) {
      this.formValues = [
        this.form.value.name,
        this.form.value.dateOfBirth,
        this.form.value.socialSecurityNumber,
        this.form.value.sex,
      ];
    }
  }
}
