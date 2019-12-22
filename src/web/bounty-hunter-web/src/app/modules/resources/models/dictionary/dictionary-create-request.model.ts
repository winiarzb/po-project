export class DictionaryCreateRequest {
  public id: number;
  public type: string; // TODO Contract status enum
  public value: string;
  public version: number;
}
