package com.developers.bountyhunter.model.world;

import com.developers.bountyhunter.model.base.IdentifiableEntity;
import com.developers.bountyhunter.model.person.UserAccount;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
public class Galaxy extends IdentifiableEntity {

	private String name;

	@OneToMany(mappedBy = "galaxy")
	private List<UserAccount> userAccounts;

	@ToString.Exclude
	@EqualsAndHashCode.Exclude
	@OneToMany(mappedBy = "galaxy")
	private List<Planet> planets;

}
