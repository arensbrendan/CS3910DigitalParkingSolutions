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
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatButtonModule} from "@angular/material/button";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {TicketCreatedComponent} from './parking-reservation/ticket-created/ticket-created.component';
import {MatDialogModule} from "@angular/material/dialog";
import {PrintTicketComponent} from "./parking-reservation/ticket-created/print/print-ticket.component";
import {
  ConfirmedTicketComponent
} from './parking-reservation/ticket-created/confirmed-ticket/confirmed-ticket.component';
import {MatTabsModule} from "@angular/material/tabs";
import {HttpClientModule} from "@angular/common/http";
import { CantCreateComponent } from './parking-reservation/cant-create/cant-create.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    CreateReservationComponent,
    EditReservationComponent,
    CheckAvailiabilityComponent,
    TicketCreatedComponent,
    PrintTicketComponent,
    ConfirmedTicketComponent,
    CantCreateComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatButtonModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatTabsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
