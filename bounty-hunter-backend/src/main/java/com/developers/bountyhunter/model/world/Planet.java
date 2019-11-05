package com.developers.bountyhunter.model.world;

import com.developers.bountyhunter.model.base.IdentifiableEntity;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import java.util.List;

@Entity
@Data
public class Planet extends IdentifiableEntity {

	private String name;

	@Enumerated(EnumType.STRING)
	private PlanetType planetType;

	@ManyToOne()
	@JoinColumn(name = "galaxy_id", referencedColumnName = "id")
	private Galaxy galaxy;

	@OneToMany(mappedBy = "planet")
	private List<District> districts;


}
