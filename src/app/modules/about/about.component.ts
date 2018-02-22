import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  lat: number = 51.678418;
  lng: number = 7.809007;

  public projects: any[] = [
    {id: 0, src: '/assets/images/plans.jpg', label: 'First Project'},
    {id: 1, src: '/assets/images/plans.jpg', label: 'Second Project'},
    {id: 2, src: '/assets/images/plans.jpg', label: 'Third Project'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
