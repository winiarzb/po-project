export class PlanetCreateRequest {
  public districtsIds: number[];
  public galaxyId: number;
  public name: string;
  public planetType: string; // TODO should be enum
}
