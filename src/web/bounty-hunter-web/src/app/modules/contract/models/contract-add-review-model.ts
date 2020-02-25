export class ContractAddReviewModel {
  public wouldRecommend: boolean;
  public rating: number;
  public comment: string;

  constructor(
    public contractId: number
  ) {
  }

}
