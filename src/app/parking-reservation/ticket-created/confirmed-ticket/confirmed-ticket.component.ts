import {Component, Inject, OnInit} from '@angular/core';
import {PrintTicketComponent} from "../print/print-ticket.component";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-confirmed-ticket',
  templateUrl: './confirmed-ticket.component.html',
  styleUrls: ['./confirmed-ticket.component.css']
})
export class ConfirmedTicketComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              public dialog: MatDialog,
              private thisDialog: MatDialogRef<ConfirmedTicketComponent>
  ) {
  }

  ngOnInit(): void {
  }

  print() {
    this.dialog.open(PrintTicketComponent, {
      width: '100%',
      height: '100%',
      data: this.data
    });
  }

}
