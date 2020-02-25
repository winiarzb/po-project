export interface IUserJwtDecodedModel {
  sub: string;
  username: string;
  role: string[];
  iat: number;
  exp: number;
}
