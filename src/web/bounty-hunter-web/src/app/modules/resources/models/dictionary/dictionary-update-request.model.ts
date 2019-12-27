import {DictionaryType} from '../../../../shared/enums/dictionary-type.enum';

export class DictionaryUpdateRequest {
  public id: number;
  public type: DictionaryType;
  public value: string;
  public version: number;
}
