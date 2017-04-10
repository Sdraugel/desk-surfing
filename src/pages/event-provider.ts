import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {NativeStorage} from "ionic-native";
import 'rxjs/add/operator/map';

/*
 Generated class for the EventProvider provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
@Injectable()
export class EventProvider {

  constructor(public http: Http) {
    //console.log("Event Provider")
  }
  public getJsonData(){


    return this.http.get('http://localhost:8080/DeskSurfingBackEnd/REST/WebService/GetFeeds')
      .map(res => {
        let body = res.json();
        return body.events || { };

      });

  }
}
