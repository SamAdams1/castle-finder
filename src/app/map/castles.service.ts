import data from '../../../getData/austria.json';

// gets the castle data and decouples it from a specific component
export class CastleService {
  getCastles() {
    const castlesData: { [key: string]: number[] } = data;
    return castlesData;
  }
}
