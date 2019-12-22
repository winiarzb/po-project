import {Planet} from '../../../../shared/models/planet.model';

export class GalaxyUpdateRequest {
  public id: number;
  public name: string;
  public planets: Planet[];
  public version: number;
}
