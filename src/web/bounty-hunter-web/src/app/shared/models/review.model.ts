import {IIdentifiable} from '../interfaces/identifiable.interface';

export class Review implements IIdentifiable {
  public id: number;
  public version: number;
  public comment: string;
  public rating: number;
  public wouldRecommend: boolean;
}
