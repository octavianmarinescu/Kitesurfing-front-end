import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Spot } from '../model/spot.model';

@Injectable()
export class SpotService {
    BASE_URL: string = 'https://internship-2019.herokuapp.com/';
    headers: HttpHeaders;
    token: string;

    constructor(private http: HttpClient) {
        this.headers = new HttpHeaders({'Content-Type': 'application/json'})
    }

    getToken() {
        return this.http.post(this.BASE_URL + 'api-user-get', 
                      {'email': 'marinescu.o@yahoo.com'}, 
                      {headers: this.headers})
                .pipe(map(data => (<any>data).result.token));
    }

    setToken(token: string) {
        this.token = token;
        this.headers = this.headers.append('token', this.token);
    }

    getDetails(id: string) {
        return this.http.post(this.BASE_URL + 'api-spot-get-details',
                               {'spotId': id},
                               {headers: this.headers})
                    .pipe(map(data => (<any>data).result));
    }

    getSpots(countryName: string) {
        return this.http.post(this.BASE_URL + 'api-spot-get-all', 
                       {country: countryName}, 
                       {headers: this.headers})
                .pipe(map(data => (<any>data).result));
    }

    addToFavorites(spot: Spot) {
        return this.http.post(this.BASE_URL + 'api-spot-favorites-add',
                        {spotId: spot.id},
                        {headers: this.headers})
                    .pipe(map(data => (<any>data).result))

    }
  
    removeFromFavorites(spot: Spot) {
        return this.http.post(this.BASE_URL + 'api-spot-favorites-remove',
                        {spotId: spot.id},
                        {headers: this.headers})
                    .pipe(map(data => (<any>data).result))
    }
}

