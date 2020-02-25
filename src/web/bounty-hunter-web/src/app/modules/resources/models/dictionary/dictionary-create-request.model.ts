import {DictionaryType} from '../../../../shared/enums/dictionary-type.enum';

export class DictionaryCreateRequest {
  // public id: number;
  public type: DictionaryType;
  public value: string;
  public version: number;
}
