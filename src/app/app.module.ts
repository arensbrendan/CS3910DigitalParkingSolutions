import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {MatCardModule} from "@angular/material/card";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {LandingPageComponent} from './landing-page/landing-page.component';
import {CreateReservationComponent} from './parking-reservation/create-reservation.component';
import {AppRoutingModule} from './app-routing.module';
import {EditReservationComponent} from './edit-reservation/edit-reservation.component';
import {CheckAvailiabilityComponent} from './check-availiability/check-availiability.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    CreateReservationComponent,
    EditReservationComponent,
    CheckAvailiabilityComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
