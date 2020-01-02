import {PlanetType} from '../enums/planet-type.enum';
import {District} from './district.model';
import {IIdentifiable} from '../interfaces/identifiable.interface';

export class Planet implements IIdentifiable {
  public id: number;
  public version: number;
  public name: string;
  public planetType: PlanetType;
  public districts: District[]; // TODO disc
}
