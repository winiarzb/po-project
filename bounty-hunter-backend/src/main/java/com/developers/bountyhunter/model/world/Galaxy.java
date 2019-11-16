package com.developers.bountyhunter.model.world;

import com.developers.bountyhunter.model.base.IdentifiableEntity;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.OneToMany;
import java.util.List;

@Entity
@Data
public class Galaxy extends IdentifiableEntity {

	private String name;

	@OneToMany(mappedBy = "galaxy")
	private List<Planet> planets;

}
