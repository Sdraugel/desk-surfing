import { Component } from '@angular/core';
import {NavController, NavParams, Events} from 'ionic-angular';
import {MySpacesPage} from '../my_spaces/my_spaces'
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

/*
  Generated class for the Newspace page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-newspace',
  templateUrl: 'newspace.html'
})
export class NewSpacePage {

  authForm : FormGroup;
  mySpacesPage;
  newspace;
  name;
  numSpaces;
  site;
  building;
  floor;
  description;
  desk;
  date_from;
  date_to;


  constructor(public navCtrl: NavController, fb: FormBuilder, public events: Events) {
    this.mySpacesPage = MySpacesPage;
    this.authForm = fb.group({
      'name': [null, Validators.compose([Validators.required])],
      'numSpaces': [null, Validators.compose([Validators.required])],
      'site': [null, Validators.compose([Validators.required])],
      'building': [null, Validators.compose([Validators.required])],
      'floor': [null, Validators.compose([Validators.required])],
      'description': [null, Validators.compose([Validators.required])],
      'desk': [null, Validators.compose([Validators.required])],
      'date_from': [null, Validators.compose([Validators.required])],
      'date_to': [null, Validators.compose([Validators.required])]
    });

    // second page (listen for the user created event)
    events.subscribe('Space added', (newspace) => {
      // user and time are the same arguments passed in `events.publish(user, time)`
      this.newspace = 'Name: ' + name + ', '
        + 'Number of Spaces: ' + this.numSpaces + ', '
        + 'Site: ' + this.site + ', '
        + 'Building: ' + this.building + ', '
        + 'Floor: ' + this.floor + ', '
        + 'Desk: ' + this.desk + ', '
        + 'Date From: ' + this.date_from + ', '
        + 'Date To: ' + this.date_to + ', '
        + 'Description: ' + this.description
    });

  }


  ionViewDidLoad() {
    //console.log('ionViewDidLoad NewSpacePage');
  }

  submitForm(value: any):void{

    this.name = value.name;
    this.numSpaces = value.numSpaces;
    this.site = value.site;
    this.building = value.building;
    this.floor = value.floor;
    this.description = value.description;
    this.desk = value.desk;
    this.date_from = value.date_from;
    this.date_to = value.date_to;

    /*
    console.log('Name: ' + name + ', '
      + 'Number of Spaces: ' + numSpaces + ', '
      + 'Site: ' + site + ', '
      + 'Building: ' + building + ', '
      + 'Floor: ' + floor + ', '
      + 'Desk: ' + desk + ', '
      + 'Date From: ' + date_from + ', '
      + 'Date To: ' + date_to + ', '
      + 'Description: ' + description + ', ');
      */

    this.newspace = 'Name: ' + this.name + ', '
      + 'Number of Spaces: ' + this.numSpaces + ', '
      + 'Site: ' + this.site + ', '
      + 'Building: ' + this.building + ', '
      + 'Floor: ' + this.floor + ', '
      + 'Desk: ' + this.desk + ', '
      + 'Date From: ' + this.date_from + ', '
      + 'Date To: ' + this.date_to + ', '
      + 'Description: ' + this.description;

    this.navCtrl.push(MySpacesPage);
  }

  cancel() {
    this.navCtrl.pop();
  }

}
