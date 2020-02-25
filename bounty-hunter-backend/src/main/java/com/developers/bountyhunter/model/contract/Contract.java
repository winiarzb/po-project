package com.developers.bountyhunter.model.contract;

import com.developers.bountyhunter.model.base.IdentifiableEntity;
import com.developers.bountyhunter.model.person.UserAccount;
import com.developers.bountyhunter.model.person.Victim;
import com.developers.bountyhunter.model.review.Review;
import com.developers.bountyhunter.model.world.District;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import java.sql.Time;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.Date;

@Entity
@Data
public class Contract extends IdentifiableEntity {

	private String name;

	@Enumerated(EnumType.STRING)
	private ContractStatus contractStatus;

	private int payment;

	@Enumerated(EnumType.STRING)
	private Priority priority;

	private Timestamp fromDate;

	private Timestamp thruDate;

	@OneToOne()
	@JoinColumn(name = "hunter_id")
	private UserAccount hunter;

	@OneToOne()
	@JoinColumn(name = "client_id")
	private UserAccount client;

	@OneToOne()
	@JoinColumn(name = "victim_id")
	private Victim victim;

	@ManyToOne()
	@JoinColumn(name = "district_id", referencedColumnName = "id")
	private District district;

	@OneToOne()
	@JoinColumn(name = "review_id")
	private Review review;

}
