package com.developers.bountyhunter.mapper.world;

import com.developers.bountyhunter.dto.world.PlanetDTO;
import com.developers.bountyhunter.dto.world.PlanetFormDTO;
import com.developers.bountyhunter.model.world.Planet;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper
public interface PlanetMapper {

	PlanetDTO planetToPlanetDTO(Planet planet);
	Planet planetDTOtoPlanet(PlanetDTO planetDTO);
	Planet planetFormDTOToPlanet(PlanetFormDTO planetFormDTO);

	List<PlanetDTO> planetsToPlanetsDTO(List<Planet> planets);
	List<Planet> planetsDTOtoPlanets(List<PlanetDTO> planetsDTO);

}
