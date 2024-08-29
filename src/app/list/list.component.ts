import { Component } from '@angular/core';
import { CastleService } from '../map/castles.service';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  data: Promise<[{ id: number; name: String; latLon: number[] }]>;
  // castlesKeys;

  constructor(service: CastleService) {
    // this.loadCastles(service)
    this.data = service.getCastlesData();

    // this.castlesKeys = Object.keys(this.castlesData);
  }

  copyLatLon(latLon: number[]) {
    console.log(latLon);
    navigator.clipboard.writeText(`${latLon}`);
  }

  // async loadCastles(service: CastleService) {
  //   this.data = await service.getCastlesData()
  // }
}
