import { Component, OnInit } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  public carouselOne: NgxCarousel;
  public project: any = {
    slides: [
      {
        src: 'assets/images/house_1.jpg',
      },
      {
        src: 'assets/images/house_2.jpg',
      }
    ],
    description: {
      title: 'Dreigiebelhaus',
      text: 'Dreigiebelhaus Schlichte Eleganz zeichnet dieses moderne Dreigiebelhaus aus. Die Architektur vereint Design und Tradition. Das ausgewogene Verhältnis zwischen Form und Raum wird von den 3 Giebeln des Daches geprägt. Die weitläufige Architektur lebt von den großzügigen Fensterflächen, die den Wohnraum mit Sonne fluten. Die daraus wachsenden  Räume bieten Geborgenheit und Freiraum zugleich. Genau das sind die Attribute, die Sie als Bewohner dieses Hauses täglich schätzen werden. Das macht Ihr Wohnen erst lebenswert',
      listsTitle: 'Details',
      listOfDetails: [
        {property: 'Zimmer', value: '5'},
        {property: 'Quadratmeter', value: '145 m²'},
        {property: 'Bäder', value: '2'},
        {property: 'Keller', value: 'alternativ zu Bodenplatte Nutzkeller oder Wohnkeller möglich'},
        {property: 'Garage', value: 'alternativ zu Stellplatz Garage oder Carport möglich'},
        {property: 'Mögliche Bauweisen', value: 'Massivhaus, Liapor-, Fertighaus'},
        {property: 'Energieeffizienz', value: 'KfW 70 oder KfW 55'},
        {property: 'Architektur', value: 'Frei planbar'},
        {property: 'Ausbaustufen', value: 'Rohbaufertig | Technikfertig | Schlüsselfertig | Einzugfertig'},
        {property: 'Preis', value: 'auf Anfrage'},
      ]
    },
  };
  constructor() { }

  ngOnInit() {
    this.carouselOne = {
      grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
      slide: 1,
      speed: 1000,
      interval: 4000,
      point: {
        visible: false
      },
      load: 2,
      touch: true,
      loop: true,
      custom: 'banner',
      easing: 'ease-in-out',
    }
  }

}
