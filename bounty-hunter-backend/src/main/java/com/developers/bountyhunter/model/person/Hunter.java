package com.developers.bountyhunter.model.person;

import com.developers.bountyhunter.model.review.Review;
import com.developers.bountyhunter.model.world.District;
import lombok.Data;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.PrimaryKeyJoinColumn;
import java.util.List;

@Entity
@Data
@PrimaryKeyJoinColumn(name = "person_id")
@DiscriminatorValue("hunter")
public class Hunter extends Person {

	@ManyToMany(mappedBy = "hunters")
	private List<District> districts;

	@OneToMany(mappedBy = "hunter")
	private List<Review> reviews;

}
