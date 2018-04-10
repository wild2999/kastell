import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";
import { About } from "../models/about";
import { map } from "rxjs/operators";

@Injectable()
export class AboutService {

  private url: string = "/api/v1/about";
  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<About[]> {
    return this.http.get<any>(this.url)
    .pipe(map(result => result.about));
  }

}
