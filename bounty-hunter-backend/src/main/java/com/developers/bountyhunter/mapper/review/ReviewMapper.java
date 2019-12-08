package com.developers.bountyhunter.mapper.review;

import com.developers.bountyhunter.dto.review.ReviewDTO;
import com.developers.bountyhunter.dto.review.ReviewFormDTO;
import com.developers.bountyhunter.model.review.Review;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper
public interface ReviewMapper {

	ReviewDTO reviewToReviewDTO(Review review);

	Review reviewDTOtoReview(ReviewDTO reviewDTO);

	Review reviewFormDTOtoReview(ReviewFormDTO reviewFormDTO);

	List<ReviewDTO> reviewsToReviewsDTO(List<Review> reviews);

	List<Review> reviewsDTOtoReviews(List<ReviewDTO> reviewsDTO);

}
