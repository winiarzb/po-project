import {ThreatLevel} from '../enums/threat-level.enum';

export class Victim {
  public id: number;
  public version: number;
  public name: string;
  public alias: string;
  public birthDate: Date;
  public age: number;
  public forceSensitive: boolean;
  public threatLevel: ThreatLevel
}
