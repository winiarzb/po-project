package com.developers.bountyhunter.model.person;

import com.developers.bountyhunter.model.contract.Contract;
import lombok.Data;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.PrimaryKeyJoinColumn;
import java.util.List;

@Entity
@Data
@PrimaryKeyJoinColumn(name = "person_id")
@DiscriminatorValue("client")
public class Client extends Person {

	@OneToMany(mappedBy = "client")
	private List<Contract> contracts;

}
