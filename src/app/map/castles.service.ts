import { Injectable } from '@angular/core';

// gets the castle data and decouples it from a specific component
@Injectable({
  providedIn: 'root',
})
export class CastleService {
  // private apiUrl = 'http://localhost:8080/castles';
  private apiUrl =
    'http://castle-finder-env.eba-fmcmrebx.us-east-1.elasticbeanstalk.com/castles';

  ngOnInit(): void {}

  async getCastlesData(): Promise<
    [{ id: number; name: String; latLon: number[] }]
  > {
    const response = await fetch(this.apiUrl);
    return response.json();
  }
}
