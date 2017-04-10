import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {NewSpacePage} from '../newspace/newspace'
import {Events} from 'ionic-angular';

/*
  Generated class for the MySpaces page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-my_spaces',
  templateUrl: 'my_spaces.html'
})

export class MySpacesPage {

  items = ["No saved spaces..."];

  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events) {

    function updateItems(item) {
      events.publish(this.items.push(item));
    }

  }

  newSpacePage = NewSpacePage;

  ionViewDidLoad() {
    console.log('ionViewDidLoad MySpacesPage');
  }


}
