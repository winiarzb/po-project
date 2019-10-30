package com.developers.bountyhunter.dto.review;

import com.developers.bountyhunter.dto.base.IdentifiableDTO;
import com.developers.bountyhunter.dto.contract.ContractDTO;
import lombok.Data;

@Data
public class ReviewDTO extends IdentifiableDTO {

	private String comment;
	private int rating;
	private boolean wouldRecommend;
	private ContractDTO contract;

}
