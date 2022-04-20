import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-check-availiability',
  templateUrl: './check-availiability.component.html',
  styleUrls: ['./check-availiability.component.css']
})
export class CheckAvailiabilityComponent implements OnInit {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  parkingSpaces: Array<Array<Array<boolean>>> | undefined;
  constructor(
    private http: HttpClient,
  ) {
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
    /*this.http.get<any>("http://localhost:8080").subscribe(spots =>{
      console.log(spots);
    });*/


  }

}
