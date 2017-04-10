import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ActivationPage } from '../activation/activation'


/*
  Generated class for the Register page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  activationPage = ActivationPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
