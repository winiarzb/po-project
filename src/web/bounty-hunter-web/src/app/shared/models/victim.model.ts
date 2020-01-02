import {ThreatLevel} from '../enums/threat-level.enum';
import {IIdentifiable} from '../interfaces/identifiable.interface';

export class Victim implements IIdentifiable {
  public id: number;
  public version: number;
  public name: string;
  public alias: string;
  public birthDate: Date;
  public age: number;
  public forceSensitive: boolean;
  public threatLevel: ThreatLevel
}
