import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { MainPage } from '../pages/main/main'
import {RegisterPage} from "../pages/register/register";
import { ActivationPage } from '../pages/activation/activation'
import {MySpacesPage} from "../pages/my_spaces/my_spaces";
import {ReservationsPage} from "../pages/reservations/reservations";
import {NewSpacePage} from "../pages/newspace/newspace";
import {SearchPage} from "../pages/search/search"
import {ResultsPage} from "../pages/results/results";

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    ItemDetailsPage,
    ListPage,
    RegisterPage,
    ActivationPage,
    MainPage,
    MySpacesPage,
    ReservationsPage,
    NewSpacePage,
    SearchPage,
    ResultsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    ItemDetailsPage,
    ListPage,
    RegisterPage,
    ActivationPage,
    MainPage,
    MySpacesPage,
    ReservationsPage,
    NewSpacePage,
    SearchPage,
    ResultsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
