import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-ticket-created',
  templateUrl: './print-ticket.component.html',
  styleUrls: ['./print-ticket.component.css']
})
export class PrintTicketComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private thisDialog: MatDialogRef<PrintTicketComponent>
  ) {
  }

  ngOnInit(): void {
    setTimeout(() => {
      window.print();
      setTimeout(() => {
        this.thisDialog.close(true);
      }, 1)
    }, 100)
  }

  dateToString(date: any): String {
    if (date != undefined) {
      return date.getMonth() + 1 + "/" + date.getDate();
    } else {
      return ""
    }
  }

  getDate(): String {
    if (this.data.oneDay) {
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
