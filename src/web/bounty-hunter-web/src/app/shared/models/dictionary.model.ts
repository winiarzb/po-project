// TODO required consultation
import {IIdentifiable} from '../interfaces/identifiable.interface';

export class DictionaryModel implements IIdentifiable {
  public id: number;
  public version: number;
  public value: string;
  public type: string;
}
