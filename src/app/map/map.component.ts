// map.component.ts
import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

import { NgFor } from '@angular/common';
import { CastleService } from './castles.service';
import { PopoutComponent } from '../popout/popout.component';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [NgFor, PopoutComponent],
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  map: any;
  numCastles = 0;
  castlesData;

  constructor(service: CastleService) {
    this.castlesData = service.getCastlesData();
  }

  ngOnInit(): void {
    this.configureMap();
    this.addMarkers();
    console.log(this.numCastles);
  }

  configureMap() {
    this.map = L.map('map', {
      center: [47.5162, 13.5501], // austria center
      zoom: 7,
    });
    // adds tiles to map
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.map);
  }

  addMarkers() {
    // add markers with popup to map
    const iconSize = 15;
    Object.keys(this.castlesData).forEach((key) => {
      const castleName = key.split(',')[0].replace(' ', '_');
      const coords = this.castlesData[key] as L.LatLngTuple;
      const mapLink = 'https://www.google.com/maps?q=' + castleName;
      const wikiLink = 'https://de.wikipedia.org/wiki/' + castleName;
      this.numCastles += 1;

      L.marker(coords, {
        icon: new L.Icon({
          iconUrl: '/red-dot.png',
          iconSize: [iconSize, iconSize],
          iconAnchor: [iconSize / 2, iconSize / 2],
        }),
      }).addTo(this.map).bindPopup(`
        <div>
          <h1>${key}</h1>
          <a href="${mapLink}" target="_blank">MapLink</a>
          <a href="${wikiLink}" target="_blank">wikiLink</a>
        </div>
        `);
    });
  }

  getCastleKeys(): string[] {
    return Object.keys(this.castlesData);
  }
}
