import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {ResultsPage} from "../results/results";

/*
  Generated class for the Search page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

  authForm : FormGroup;

  constructor(public navCtrl: NavController, fb: FormBuilder) {
    this.authForm = fb.group({
      'spaces': [null, Validators.compose([Validators.required])],
      'sites': [null, Validators.compose([Validators.required])],
      'buildings': [null, Validators.compose([Validators.required])],
      'floors': [null, Validators.compose([Validators.required])],
      'date_from': [null, Validators.compose([Validators.required])],
      'date_to': [null, Validators.compose([Validators.required])]
    })

  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad SearchPage');
  }

  submitForm(value: any):void{

    var spaces = value.spaces;
    var sites = value.sites;
    var buildings = value.buildings;
    var floors = value.floors;

    console.log('Form submited!');
    console.log('Number of Spaces: ' + spaces + ', '
      + 'Site: ' + sites + ', '
      + 'Building: ' + buildings + ', '
      + 'Floor: ' + floors );

    this.navCtrl.push(ResultsPage);
  }

}
