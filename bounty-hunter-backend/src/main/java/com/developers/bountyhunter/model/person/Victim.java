package com.developers.bountyhunter.model.person;

import com.developers.bountyhunter.model.contract.Contract;
import lombok.Data;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.PrimaryKeyJoinColumn;

@Entity
@Data
@PrimaryKeyJoinColumn(name = "person_id")
@DiscriminatorValue("victim")
public class Victim extends Person {

	@OneToOne()
	@JoinColumn(name = "contract_id")
	private Contract contract;

}
