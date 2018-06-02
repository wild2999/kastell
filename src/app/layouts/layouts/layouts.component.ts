import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.scss']
})
export class LayoutsComponent implements OnInit {

  public menu: any = [
    {label: 'Zuhause', path: '/'},
    {label: 'Projekte', path: '/projekte'},
    {label: 'Über uns', path: '/über'},
    {label: 'Kontakte', path: '/kontakte'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
