import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-check-availiability',
  templateUrl: './check-availiability.component.html',
  styleUrls: ['./check-availiability.component.css']
})
export class CheckAvailiabilityComponent implements OnInit {

  parkingSpaces: Array<Array<Array<boolean>>> | undefined;
  constructor() {
  }

  ngOnInit(): void {
    let i, j, k;
    this.parkingSpaces = [];
    for (i = 0; i < 5; i++) {
      this.parkingSpaces[i] = [];
      for (j = 0; j < 10; j++) {
        this.parkingSpaces[i][j] = [];
        for (k = 0; k < 20; k++) {
          this.parkingSpaces[i][j][k] = Math.random() < 0.5;
        }
      }
    }

  }

}
