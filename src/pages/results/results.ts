import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Http} from "@angular/http";
import {EventProvider} from '../event-provider';
import {MainPage} from '../main/main'

/*
  Generated class for the Results page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-results',
  templateUrl: 'results.html',
  providers: [EventProvider]
})
export class ResultsPage {

  events;
  mainPage = MainPage;

  items = [
    'HNA Desk 2A 003 From 4/10/2017 to 4/14/2017',
    'HNA Desk 3C 015 From 4/17/2017 to 4/21/2017',
    'HNA Desk 2B 011 From 4/24/2017 to 4/28/2017'
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) {

    /*
    this.http.get("http://localhost:8080/DeskSurfingBackEnd/REST/WebService/GetFeeds").subscribe(data => {
      console.log("Got data");
      this.items=JSON.parse(data.text()).results; // this is the error
      console.log(this.items = data.json());
  });
  */


    console.log("The response: " + this.events);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultsPage');
  }


}
