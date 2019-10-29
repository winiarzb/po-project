package com.developers.bountyhunter.dto.world;

import com.developers.bountyhunter.dto.base.IdentifiableDTO;
import com.developers.bountyhunter.model.world.PlanetType;
import lombok.Data;

import java.util.List;

@Data
public class PlanetDTO extends IdentifiableDTO {

	private String name;
	private PlanetType planetType;
	private GalaxyDTO galaxy;
	private List<DistrictDTO> districts;

}
