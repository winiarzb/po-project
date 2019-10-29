package com.developers.bountyhunter.model.contract;

import com.developers.bountyhunter.model.base.IdentifiableEntity;
import com.developers.bountyhunter.model.person.Client;
import com.developers.bountyhunter.model.person.Victim;
import com.developers.bountyhunter.model.world.District;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import java.util.Date;

@Entity
@Data
public class Contract extends IdentifiableEntity {

	@Enumerated(EnumType.STRING)
	private ContractStatus contractStatus;

	private int payment;

	@Enumerated(EnumType.STRING)
	private Priority priority;

	private Date fromDate;

	private Date thruDate;

	@ManyToOne()
	@JoinColumn(name = "district_id", referencedColumnName = "id")
	private District district;

	@ManyToOne()
	@JoinColumn(name = "client_id", referencedColumnName = "person_id")
	private Client client;

	@OneToOne()
	@JoinColumn(name = "victim_id")
	private Victim victim;


}
