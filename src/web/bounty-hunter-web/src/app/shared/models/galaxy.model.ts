import {Planet} from './planet.model';
import {IIdentifiable} from '../interfaces/identifiable.interface';

export class Galaxy implements IIdentifiable {
  public id: number;
  public version: number;
  public name: string;
  public planets: Planet[]; // TODO planets
}
