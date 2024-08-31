import { Injectable } from '@angular/core';

interface Data {
  [key: string]: number[];
}
import data from '../../../getData/austria.json';
const jsonData = data as Data;

// gets the castle data and decouples it from a specific component
@Injectable({
  providedIn: 'root',
})
export class CastleService {
  // private apiUrl = 'http://localhost:8080/castles';
  private apiUrl =
    'http://castle-finder-env.eba-fmcmrebx.us-east-1.elasticbeanstalk.com/castles';

  ngOnInit(): void {}

  // async getCastlesData(): Promise<
  //   [{ id: number; name: String; latLon: number[] }]
  // > {
  //   const response = await fetch(this.apiUrl);
  //   return response.json();
  // }
  getCastlesData() {
    let format: { id: number; name: String; latLon: number[] }[] = [];
    Object.keys(jsonData).map((key: string, index) => {
      format.push({ id: index, name: key, latLon: jsonData[key] });
    });

    return format;
  }
}
