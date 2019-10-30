package com.developers.bountyhunter.resource.review;

import com.developers.bountyhunter.dto.review.ReviewDTO;
import com.developers.bountyhunter.mapper.review.ReviewMapper;
import com.developers.bountyhunter.model.review.Review;
import com.developers.bountyhunter.service.review.ReviewService;
import lombok.RequiredArgsConstructor;
import org.mapstruct.factory.Mappers;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/review")
@RequiredArgsConstructor
public class ReviewResource {

	private final ReviewService reviewService;

	private ReviewMapper reviewMapper = Mappers.getMapper(ReviewMapper.class);

	@GetMapping("/{id}")
	private ResponseEntity<ReviewDTO> getById(@PathVariable("id") Long id) {

		Optional<Review> review = reviewService.findById(id);

		return review.map(value -> new ResponseEntity<>(reviewMapper.reviewToReviewDTO(value), HttpStatus.OK)).
				orElseGet(() -> new ResponseEntity<>(null, HttpStatus.NOT_FOUND));

	}

	@GetMapping("/all")
	private ResponseEntity<List<ReviewDTO>> getAll() {

		List<ReviewDTO> reviewDTOS = reviewMapper.reviewsToReviewsDTO(reviewService.findAll());
		return new ResponseEntity<>(reviewDTOS, HttpStatus.OK);

	}

	@PostMapping()
	private ResponseEntity<ReviewDTO> createReview(@Valid @RequestBody ReviewDTO reviewDTO, BindingResult bindingResult) {

		if (bindingResult.hasErrors()) {
			return new ResponseEntity<>(reviewDTO, HttpStatus.BAD_REQUEST);
		}

		Review review = reviewMapper.reviewDTOtoReview(reviewDTO);
		review = reviewService.save(review);
		reviewDTO = reviewMapper.reviewToReviewDTO(review);

		return new ResponseEntity<>(reviewDTO, HttpStatus.CREATED);
	}

	@PutMapping()
	private ResponseEntity<ReviewDTO> updateReview(@Valid @RequestBody ReviewDTO reviewDTO, BindingResult bindingResult) {

		if (bindingResult.hasErrors()) {
			return new ResponseEntity<>(reviewDTO, HttpStatus.BAD_REQUEST);
		}

		Optional<Review> review = reviewService.findById(reviewDTO.getId());

		if (review.isPresent()) {
			reviewService.save(reviewMapper.reviewDTOtoReview(reviewDTO));
			return new ResponseEntity<>(reviewDTO, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(reviewDTO, HttpStatus.NOT_FOUND);
		}
	}

	@DeleteMapping("/{id}")
	private ResponseEntity<ReviewDTO> deleteReview(@PathVariable Long id) {

		Optional<Review> review = reviewService.findById(id);

		if (review.isPresent()) {
			reviewService.deleteById(id);
			return new ResponseEntity<>(null, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);

		}
	}

}
