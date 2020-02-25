package com.developers.bountyhunter.service.world;

import com.developers.bountyhunter.model.world.Galaxy;
import com.developers.bountyhunter.model.world.Planet;
import com.developers.bountyhunter.model.world.PlanetType;
import com.developers.bountyhunter.repository.world.PlanetRepository;
import com.developers.bountyhunter.service.base.BaseServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
@RequiredArgsConstructor
public class PlanetServiceImpl extends BaseServiceImpl<Planet, Long> implements PlanetService {

	private final PlanetRepository planetRepository;

	@Override
	public Optional<Planet> findPlanetByPlanetName(String planetName) {
		return planetRepository.findPlanetByName(planetName);
	}

	@Override
	public List<Planet> findPlanetsByGalaxy(Galaxy galaxy) {

		return planetRepository.findPlanetsByGalaxy(galaxy);
	}
}
