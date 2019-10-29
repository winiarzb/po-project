package com.developers.bountyhunter.mapper.world;

import com.developers.bountyhunter.dto.world.PlanetDTO;
import com.developers.bountyhunter.model.world.Planet;
import org.mapstruct.Mapper;

@Mapper
public interface PlanetMapper {

	PlanetDTO planetToPlanetDTO(Planet planet);
	Planet planetDTOtoPlanet(PlanetDTO planetDTO);

}
