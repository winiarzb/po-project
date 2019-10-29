package com.developers.bountyhunter.mapper.review;

import com.developers.bountyhunter.dto.review.ReviewDTO;
import com.developers.bountyhunter.model.review.Review;
import org.mapstruct.Mapper;

@Mapper
public interface ReviewMapper {

	ReviewDTO reviewToReviewDTO(Review review);
	Review reviewDTOtoReview(ReviewDTO reviewDTO);

}
