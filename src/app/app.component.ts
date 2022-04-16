import { Component } from '@angular/core';
// import * as internal from 'stream';  this broke for me when I opened the file, or maybe I copied it and don't remember - Clay

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DigitalParkingSolutions';
}

//should be able to import and use as a dataType  We might want to change the file it's in though...
// import {Reservation} from /src/app/app.component.ts
//E.G. reservation[] : Reservation; I think.
export type Reservation = {
  /**
   * Name of Customer
   */
  name : string;
  /**
   * Make of the car
   */
  make : string;
  /**
   * Model of the car
   */
  model : string;
  /**
   * Color of the car
   */
  color : string;
  /**
   * Customer License Plate
   */
  licensePlate : string;
  /**
   * Is the reservation only for 1 day?
   */
  oneDay : boolean;
  /**
   * start date of reservation
   */
  startDate : Date | undefined;
  /**
   * end date of reservation
   */
  endDate : Date | undefined;
  /**
   * Spot number in the garage
   */
  spotNumber : number;
}
