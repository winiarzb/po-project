package com.developers.bountyhunter.dto.world;

import com.developers.bountyhunter.dto.base.IdentifiableDTO;
import com.developers.bountyhunter.model.world.GalaxyName;
import lombok.Data;

import java.util.List;

@Data
public class GalaxyDTO extends IdentifiableDTO {

	private GalaxyName galaxyName;
	private List<PlanetDTO> planets;

}
