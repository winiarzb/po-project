package com.developers.bountyhunter.model.world;

import com.developers.bountyhunter.model.base.IdentifiableEntity;
import com.developers.bountyhunter.model.contract.Contract;
import com.developers.bountyhunter.model.person.UserAccount;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
public class District extends IdentifiableEntity {

	private String name;

	@OneToMany(mappedBy = "district")
	private List<Contract> contracts;

	@ManyToOne()
	@JoinColumn(name = "planet_id", referencedColumnName = "id")
	private Planet planet;

	@ManyToMany(mappedBy = "districts")
	private List<UserAccount> userAccounts;

}
