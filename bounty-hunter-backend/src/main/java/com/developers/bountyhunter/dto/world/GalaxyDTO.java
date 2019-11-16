package com.developers.bountyhunter.dto.world;

import com.developers.bountyhunter.dto.base.IdentifiableDTO;
import lombok.Data;

import java.util.List;

@Data
public class GalaxyDTO extends IdentifiableDTO {

	private String name;
	private List<PlanetDTO> planets;

}
