import {Contract} from '../../../shared/models/contract.model';

export class Auction {

  constructor(
    public contract: Contract,
    public bid: number = contract.payment
  ) {}
}
