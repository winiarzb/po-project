import {ThreatLevel} from '../../../shared/enums/threat-level.enum';

export class ContractCreateVictimModel {
  public name: string;
  public age: number;
  public threatLevel: ThreatLevel;
  public forceSensitive: boolean;
}
