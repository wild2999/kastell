import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.scss']
})
export class LayoutsComponent implements OnInit {

  public menu: any[] = [
    {label: 'Home', path: '/'},
    {label: 'About', path: '/about'},
    {label: 'Contacts', path: '/contacts'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
