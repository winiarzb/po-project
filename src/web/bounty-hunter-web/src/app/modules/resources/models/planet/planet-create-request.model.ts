import {PlanetType} from '../../../../shared/enums/planet-type.enum';

export class PlanetCreateRequest {
  public districtsIds: number[];
  public galaxyId: number;
  public name: string;
  public planetType: PlanetType;
}
