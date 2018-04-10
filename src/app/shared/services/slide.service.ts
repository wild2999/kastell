import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { Slide } from "../models/slide";

@Injectable()
export class SlideService {

  private url: string = "/api/v1/slides";
  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Slide[]> {
    return this.http.get<any>(this.url)
      .pipe(map(result => result.slides));
  }

}
