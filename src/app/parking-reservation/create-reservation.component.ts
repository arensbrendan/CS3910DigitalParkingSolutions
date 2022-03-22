import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {TicketCreatedComponent} from "./ticket-created/ticket-created.component";

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
  buttonsDisabled: boolean = false;

  constructor(public dialog: MatDialog) {
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

  save() {
    this.buttonsDisabled = true;
    let dialogRef = this.dialog.open(TicketCreatedComponent, {
      width: '75%',
      data: {
        name: this.name,
        make: this.make,
        model: this.model,
        color: this.color,
        plate: this.plate,
        date1: this.date1,
        date2: this.date2,
        oneDay: this.oneDay,

      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.buttonsDisabled = true;
      } else {
        this.buttonsDisabled = false;
      }
    }, error => {
      this.buttonsDisabled = false;
    })

  }

  cancel() {
    this.buttonsDisabled = true;

    this.name = "";
    this.make = "";
    this.model = "";
    this.color = "";
    this.plate = "";
    this.date1 = undefined;
    this.date2 = undefined;
    this.oneDay = true;

    this.buttonsDisabled = false;

  }

}
