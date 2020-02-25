package com.developers.bountyhunter.repository.review;

import com.developers.bountyhunter.model.review.Review;
import com.developers.bountyhunter.repository.base.BaseRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReviewRepository extends BaseRepository<Review, Long> {
}
