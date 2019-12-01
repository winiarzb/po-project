import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

type LoginType = {
  login: string;
  password: string;
}

@Component({
  selector: 'bh-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;

  constructor(
    private _router: Router,
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this._buildForm();
  }

  public onLogin(): void {
    const login: LoginType = this.form.value;
    console.log(login);
    console.log(this.form.valid);
  }

  private _buildForm(): void {
    this.form = this._formBuilder.group({
      login: [null, Validators.required],
      password: [null, Validators.required]
    })
  }
}
