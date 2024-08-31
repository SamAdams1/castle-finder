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

  constructor(service: CastleService) {
    this.data = service.getCastlesData();
  }

  copyLatLon(latLon: number[]) {
    console.log(latLon);
    navigator.clipboard.writeText(`${latLon}`);
  }
}
