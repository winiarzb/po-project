package com.developers.bountyhunter.model.world;

import com.developers.bountyhunter.model.base.IdentifiableEntity;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.OneToMany;
import java.util.List;

@Entity
@Data
public class Galaxy extends IdentifiableEntity {

	@Enumerated(EnumType.STRING)
	private GalaxyName galaxyName;

	@OneToMany(mappedBy = "galaxy")
	private List<Planet> planets;

}
