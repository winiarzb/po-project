import {PlanetType} from '../enums/planet-type.enum';
import {District} from './district.model';

export class Planet {
  public id: number;
  public version: number;
  public name: string;
  public planetType: PlanetType;
  public districts: District[]; // TODO disc
}
