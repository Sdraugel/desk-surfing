import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ReservationsPage} from '../reservations/reservations'
import { MySpacesPage} from '../my_spaces/my_spaces'
import { SearchPage} from '../search/search'

/*
  Generated class for the Main page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-main',
  templateUrl: 'main.html'
})
export class MainPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  tab1Root = ReservationsPage;
  tab2Root = MySpacesPage;
  searchPage = SearchPage;

}
