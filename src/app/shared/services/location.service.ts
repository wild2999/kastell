import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Location } from "../models/location";
import { map } from "rxjs/operators";

@Injectable()
export class LocationService {

  private url: string = '/api/v1/location';
  constructor(
    private http: HttpClient
  ) { }

  get(): Observable<Location> {
    return this.http.get<any>(this.url)
      .pipe(map(result => result.location));
  }

}
