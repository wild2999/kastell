import { Component, OnInit } from '@angular/core';
import { About } from "../../shared/models/about";
import { AboutService } from "../../shared/services/about.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public details: About[];
  public isProgress = true;

  constructor(
    private aboutService: AboutService
  ) {

  }

  ngOnInit() {
    this.aboutService.getAll()
      .subscribe(details => {
        this.details = details;
        this.isProgress = false;
      });
  }

  noImage(event) {
    event.target.src = '/assets/images/unknow-person.jpg';
  }

}
