export class UserAccountCreateRequest {
  public alias: string;
  public birthDate: Date;
  public enabled: boolean;
  public name: string;
  public password: string;
  public registeredDate: Date;
  public userRole: string; // TODO Should be enum
  public username: string;
}
