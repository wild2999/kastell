import { Component, Input, OnInit, HostBinding } from '@angular/core';
import { Router, NavigationStart } from "@angular/router";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @HostBinding('class.home') private location: boolean = false;
  @Input() menu;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.location = /zuhause/.test(location.pathname);

    this.router.events.subscribe(val => {
      if(val instanceof NavigationStart) {
        this.location = /\//.test(val.url);
      }
    });
  }

}
