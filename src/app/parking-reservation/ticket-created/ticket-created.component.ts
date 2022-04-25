import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {ConfirmedTicketComponent} from "./confirmed-ticket/confirmed-ticket.component";

@Component({
  selector: 'app-ticket-created',
  templateUrl: './ticket-created.component.html',
  styleUrls: ['./ticket-created.component.css']
})
export class TicketCreatedComponent implements OnInit {
  buttonsDisabled = true;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              public dialog: MatDialog,
              private thisDialog: MatDialogRef<TicketCreatedComponent>
  ) {
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

  save() {
    this.buttonsDisabled = true;
    let dialogRef = this.dialog.open(ConfirmedTicketComponent, {
      width: '50%',
      data: this.data
    });

    dialogRef.afterClosed().subscribe(result => {
      this.thisDialog.close(true)
    }, error => {
      this.thisDialog.close(false)
    })
  }
}
