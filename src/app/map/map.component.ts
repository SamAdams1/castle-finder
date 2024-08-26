// map.component.ts
import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

import data from '../../../getData/austria.json';

const castlesData: { [key: string]: number[] } = data;

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  ngOnInit(): void {
    this.configMap();
    this.printlatLon();
  }

  map: any;

  configMap() {
    this.map = L.map('map', {
      center: [47.5162, 14.5501],
      zoom: 7,
    });
    // adds tiles to map
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.map);

    // add markers to map
    const iconSize = 15;
    Object.keys(castlesData).forEach((key) => {
      const coords = castlesData[key] as L.LatLngTuple;
      // console.log(coords);
      L.marker(coords, {
        icon: new L.Icon({
          iconUrl: '/red-dot.png',
          iconSize: [iconSize, iconSize],
          iconAnchor: [iconSize / 2, iconSize / 2],
        }),
      })
        .addTo(this.map)
        .bindPopup(`<h1>${key}</h1>`);
    });
  }

  printlatLon() {
    console.log(castlesData);
  }
}
