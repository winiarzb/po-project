import {ThreatLevel} from '../../../../shared/enums/threat-level.enum';

export class VictimUpdateRequest {
  public age: number;
  public alias: string;
  public birthDate: Date;
  public forceSensitive: boolean;
  public id: number;
  public name: string;
  public threatLevel: ThreatLevel;
  public version: number;
}
