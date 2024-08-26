import { Component } from '@angular/core';
import { CastleService } from '../map/castles.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  castlesData;
  castlesKeys;

  constructor(service: CastleService) {
    this.castlesData = service.getCastlesData();

    this.castlesKeys = Object.keys(this.castlesData);
  }

  copyLatLon(latLon: number[]) {
    console.log(latLon);
    navigator.clipboard.writeText(`${latLon}`);
  }
}
