import {PlanetType} from '../../../../shared/enums/planet-type.enum';
import {District} from '../../../../shared/models/district.model';

export class PlanetUpdateRequest {
  public districts: District[];
  public id: number;
  public name: string;
  public planetType: PlanetType;
  public version: number;
}
