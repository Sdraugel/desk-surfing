import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Reservations page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-reservations',
  templateUrl: 'reservations.html'
})



export class ReservationsPage {

  items = [
    'HNA Desk 2A 003 From 4/10/2017 to 4/14/2017',
    'HNA Desk 3C 015 From 4/17/2017 to 4/21/2017',
    'HNA Desk 2B 011 From 4/24/2017 to 4/28/2017'
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReservationsPage');
  }


}
