export class ReviewCreateRequest {
  public comment: string;
  public contractId: number;
  public rating: number;
  public wouldRecommend: boolean;
}
