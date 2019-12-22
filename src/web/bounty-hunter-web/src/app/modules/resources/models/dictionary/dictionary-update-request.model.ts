export class DictionaryUpdateRequest {
  public id: number;
  public type: string; // TODO type enum
  public value: string;
  public version: number;
}
