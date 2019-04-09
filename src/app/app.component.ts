import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Spot } from './model/spot.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {SpotService} from './service/spot.service';

import {DialogOverviewExampleDialog} from './modal/modal.component';
import { getSupportedInputTypes } from '@angular/cdk/platform';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  countryName: string = "";
  spotList: Array<Spot>;

  constructor(private dialog: MatDialog, private spotService: SpotService) {}

  ngOnInit() {
    this.spotService.getToken()
            .subscribe(token => {
              this.spotService.setToken(token);
              this.getSpotList();
            });
  }

  getSpotList() {
    this.spotService.getSpots(this.countryName)
            .subscribe(data => this.spotList = data);
  }

  openCard(spot: Spot) {
    this.spotService.getDetails(spot.id).subscribe(result => {
      const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
        width: '500px',
        data: result
      })
      
      dialogRef.afterClosed().subscribe(
        data => data? this.addToFavorites(spot) : this.removeFromFavorites(spot) 
      );    
    });
  }

  addToFavorites(spot: Spot) {
    this.spotService.addToFavorites(spot)
    .subscribe(id => {
      let spot = this.spotList.find(e => e.id == id);
      if( !isNullOrUndefined(spot) ) {
        spot.isFavorite = true;
      }
    })
  }

  removeFromFavorites(spot: Spot) {
    this.spotService.removeFromFavorites(spot)
    .subscribe(id => {
      let spot = this.spotList.find(e => e.id == id);
      if( !isNullOrUndefined(spot) ) {
        spot.isFavorite = false;
      }
    })
  }


}
