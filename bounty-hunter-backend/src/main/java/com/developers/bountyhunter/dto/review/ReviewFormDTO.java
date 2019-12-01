package com.developers.bountyhunter.dto.review;

import lombok.Data;

@Data
public class ReviewFormDTO {

	private String comment;
	private int rating;
	private boolean wouldRecommend;
	private Long contractId;

}
