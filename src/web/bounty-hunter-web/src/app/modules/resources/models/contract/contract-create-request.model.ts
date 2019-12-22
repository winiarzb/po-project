export class ContractCreateRequest {
  public clientId: number;
  public contractStatus: string; // TODO enum
  public districtId: number;
  public fromDate: Date;
  public name: string;
  public payment: number;
  public priority: string; // TODO enum
  public thruDate: Date;
  public victimId: number; // TODO ???
}
