import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-parking-reservation',
  templateUrl: './create-reservation.component.html',
  styleUrls: ['./create-reservation.component.css']
})
export class CreateReservationComponent implements OnInit {

  name = "";
  make = "";
  model = "";
  color = "";
  plate = "";
  date1: Date | undefined;
  date2: Date | undefined;
  oneDay: boolean = true;

  constructor() {
  }

  ngOnInit(): void {
  }

  dateToString(date: any): String {
    if (date != undefined) {
      return date.getMonth() + 1 + "/" + date.getDate();
    } else {
      return ""
    }
  }

  getDate(): String {
    if (this.oneDay) {
      return this.dateToString(this.date1);
    } else {
      if (this.date1 == undefined && this.date2 == undefined) {
        return "";
      } else if (this.date1 == undefined && this.date2 != undefined) {
        return this.dateToString(this.date2);
      } else if (this.date2 == undefined && this.date1 != undefined) {
        return this.dateToString(this.date1);
      } else {
        return this.dateToString(this.date1) + " - " + this.dateToString(this.date2);
      }
    }
  }

}
