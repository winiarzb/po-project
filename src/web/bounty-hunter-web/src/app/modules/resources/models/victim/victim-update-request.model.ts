export class VictimUpdateRequest {
  public age: number;
  public alias: string;
  public birthDate: Date;
  public forceSensitive: boolean;
  public id: number;
  public name: string;
  public threatLevel: string; // TODO enum
  public version: number;
}
