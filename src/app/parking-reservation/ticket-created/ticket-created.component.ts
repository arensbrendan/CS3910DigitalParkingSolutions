import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-ticket-created',
  templateUrl: './ticket-created.component.html',
  styleUrls: ['./ticket-created.component.css']
})
export class TicketCreatedComponent implements OnInit {
  oneDay: boolean = true;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
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
      return this.dateToString(this.data.date1);
    } else {
      if (this.data.date1 == undefined && this.data.date2 == undefined) {
        return "";
      } else if (this.data.date1 == undefined && this.data.date2 != undefined) {
        return this.dateToString(this.data.date2);
      } else if (this.data.date2 == undefined && this.data.date1 != undefined) {
        return this.dateToString(this.data.date1);
      } else {
        return this.dateToString(this.data.date1) + " - " + this.dateToString(this.data.date2);
      }
    }
  }

}
