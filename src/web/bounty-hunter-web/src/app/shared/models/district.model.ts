import {IIdentifiable} from '../interfaces/identifiable.interface';

export class District implements IIdentifiable {
  public id: number;
  public version: number;
  public name: string;
}
