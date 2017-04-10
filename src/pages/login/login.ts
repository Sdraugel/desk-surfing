import { Component } from '@angular/core';
import {NavController} from "ionic-angular";
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import {RegisterPage} from '../register/register';
import {MainPage} from '../main/main'



@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  registerPage;
  mainPage;

  authForm : FormGroup;



  constructor(public navCtrl: NavController, fb: FormBuilder) {
    this.registerPage = RegisterPage;
    this.authForm = fb.group({
      'username': [null, Validators.compose([Validators.required, Validators.minLength(5)])],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(8)])]
    })
  }

    submitForm(value: any):void{
      //console.log('Form submited!');
      console.log(value.username, value.password);
      this.navCtrl.push(MainPage);
    }
}
