import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-check-availiability',
  templateUrl: './check-availiability.component.html',
  styleUrls: ['./check-availiability.component.css']
})
export class CheckAvailiabilityComponent implements OnInit {

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  parkingSpaces: Array<Array<Array<boolean>>> | undefined;
  floors: String[] = ["A", "B", "C", "D", "E"];

  constructor(
    private http: HttpClient,
  ) {
  }

  ngOnInit(): void {
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
  }

  getSpotNumber(i: number, j: number, k: number): string {
    let returnString = '';
    switch (i) {
      case  0:
        returnString += 'A';
        break;
      case  1:
        returnString += 'B';
        break;
      case  2:
        returnString += 'C';
        break;
      case  3:
        returnString += 'D';
        break;
      case  4:
        returnString += 'E';
        break;
      default:
        returnString += "Z";
    }
    returnString += j.toString();
    returnString += (k >= 10 ? k.toString() : "0" + k.toString());
    return returnString;

  }
}
