import {ThreatLevel} from '../../../../shared/enums/threat-level.enum';

export class VictimCreateRequest {
  public age: number;
  public forceSensitive: boolean;
  public threatLevel: ThreatLevel;
}
