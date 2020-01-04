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
public class Planet extends IdentifiableEntity {

	private String name;

	@Enumerated(EnumType.STRING)
	private PlanetType planetType;

	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name = "galaxy_id", referencedColumnName = "id")
	private Galaxy galaxy;

	@ToString.Exclude
	@EqualsAndHashCode.Exclude
	@OneToMany(mappedBy = "planet")
	private List<District> districts;

	@ManyToMany(mappedBy = "planets")
	private List<UserAccount> userAccounts;


}
