import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {Reservation} from '../app.component';
import {CantCreateComponent} from './cant-create/cant-create.component';
import {TicketCreatedComponent} from "./ticket-created/ticket-created.component";

@Component({
  selector: 'app-parking-reservation',
  templateUrl: './create-reservation.component.html',
  styleUrls: ['./create-reservation.component.css']
})
export class CreateReservationComponent implements OnInit {

  reservation: Reservation = {
    color: "",
    endDate: undefined,
    licensePlate: "",
    make: "",
    model: "",
    oneDay: true,
    startDate: undefined,
    spotNumber: "",
    name: ""
  };

  parkingSpaces: Array<Array<Array<boolean>>> | undefined;
  buttonsDisabled: boolean = false;

  constructor(public dialog: MatDialog) {

  }

  ngOnInit(): void {
  }

  checkRequirements(){
    if(this.reservation.licensePlate.length == 7 && this.reservation.startDate != undefined && this.reservation.name.length >= 1 && this.reservation.color.length >= 1
       && this.reservation.make.length >= 1 && this.reservation.model.length >= 1)
      return false;
    else
      return true;
  }

  dateToString(date: any): String {
    if (date != undefined) {
      return date.getMonth() + 1 + "/" + date.getDate();
    } else {
      return ""
    }
  }

  getDate(): String {
    if (this.reservation.oneDay) {
      return this.dateToString(this.reservation.startDate);
    } else {
      if (this.reservation.startDate == undefined && this.reservation.endDate == undefined) {
        return "";
      } else if (this.reservation.startDate == undefined && this.reservation.endDate != undefined) {
        return this.dateToString(this.reservation.endDate);
      } else if (this.reservation.endDate == undefined && this.reservation.startDate != undefined) {
        return this.dateToString(this.reservation.startDate);
      } else {
        return this.dateToString(this.reservation.startDate) + " - " + this.dateToString(this.reservation.endDate);
      }
    }
  }

  save() {
    this.buttonsDisabled = true;
    if (this.checkRequirements()) {
      let dialogRef = this.dialog.open(CantCreateComponent, {
        width: '75%',
        data: {
          name: this.reservation.name,
          make: this.reservation.make,
          model: this.reservation.model,
          color: this.reservation.color,
          plate: this.reservation.licensePlate,
          date1: this.reservation.startDate,
          date2: this.reservation.endDate,
          oneDay: this.reservation.oneDay,
        }
      })

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.buttonsDisabled = true;
        } else {
          this.buttonsDisabled = false;
        }
      }, error => {
        this.buttonsDisabled = false;
      })
    } else {

      let JsonString = localStorage.getItem('dataSource');
      if (JsonString === undefined || JsonString == null) {
        this.parkingSpaces = [];
        for (let i = 0; i < 5; i++) {
          this.parkingSpaces[i] = [];
          for (let j = 0; j < 10; j++) {
            this.parkingSpaces[i][j] = [];
            for (let k = 0; k < 20; k++) {
              this.parkingSpaces[i][j][k] = Math.random() < 0.5;
            }
          }
        }
        localStorage.setItem('dataSource', JSON.stringify(this.parkingSpaces));
      } else {
        this.parkingSpaces = JSON.parse(JsonString);
      }

      let found = false;
      for (let i = 0; i < 5; i++) {
        if (found) {
          break;
        }
        for (let j = 0; j < 10; j++) {
          if (found) {
            break;
          }
          for (let k = 0; k < 20; k++) {
            if (found) {
              break;
            }
            if (!!(this.parkingSpaces) && this.parkingSpaces[i][j][k]) {
              if (this.parkingSpaces) {
                this.parkingSpaces[i][j][k] = true;
                console.log("Found spot at ", i, j, k)
              }
              found = true;
            }
          }
        }
      }
      let dialogRef = this.dialog.open(TicketCreatedComponent, {
        width: '75%',
        data: {
          name: this.reservation.name,
          make: this.reservation.make,
          model: this.reservation.model,
          color: this.reservation.color,
          plate: this.reservation.licensePlate,
          date1: this.reservation.startDate,
          date2: this.reservation.endDate,
          oneDay: this.reservation.oneDay,

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
  }

  cancel() {
    this.buttonsDisabled = true;

    this.reservation.name = "";
    this.reservation.make = "";
    this.reservation.model = "";
    this.reservation.color = "";
    this.reservation.licensePlate = "";
    this.reservation.startDate = undefined;
    this.reservation.endDate = undefined;
    this.reservation.oneDay = true;

    this.buttonsDisabled = false;

  }

}
