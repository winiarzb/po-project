package com.developers.bountyhunter.service.review;

import com.developers.bountyhunter.model.review.Review;
import com.developers.bountyhunter.repository.review.ReviewRepository;
import com.developers.bountyhunter.service.base.BaseServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class ReviewServiceImpl extends BaseServiceImpl<Review, Long> implements ReviewService {

	private final ReviewRepository reviewRepository;

}
