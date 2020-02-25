package com.developers.bountyhunter.service.world;

import com.developers.bountyhunter.dto.world.PlanetDTO;
import com.developers.bountyhunter.model.world.Galaxy;
import com.developers.bountyhunter.model.world.Planet;
import com.developers.bountyhunter.model.world.PlanetType;
import com.developers.bountyhunter.service.base.BaseService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface PlanetService extends BaseService<Planet, Long> {

    Optional<Planet> findPlanetByPlanetName (String planetName);
    List<Planet> findPlanetsByGalaxy (Galaxy galaxy);
}
