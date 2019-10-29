package com.developers.bountyhunter.model.review;

import com.developers.bountyhunter.model.base.IdentifiableEntity;
import com.developers.bountyhunter.model.contract.Contract;
import com.developers.bountyhunter.model.person.Hunter;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

@Entity
@Data
public class Review extends IdentifiableEntity {

	private String comment;
	private int rating;
	private boolean wouldRecommend;

	@OneToOne()
	@JoinColumn(name = "contract_id")
	private Contract contract;

	@ManyToOne()
	@JoinColumn(name = "hunter_id", referencedColumnName = "person_id")
	private Hunter hunter;

}
