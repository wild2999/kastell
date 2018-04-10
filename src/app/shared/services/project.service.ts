import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Project } from "../models/project";
import { map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ProjectService {

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Project[]> {
  const url: string = '/api/v1/projects';
    return this.http.get<any>(url)
      .pipe(map(result => result.projects));
  }

  getOneById(id): Observable<Project[]> {
    const url: string = `/api/v1/project?_id=${id}`;
    return this.http.get<any>(url)
      .pipe(map(result => result.project));
  }

}
