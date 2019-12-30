package com.developers.bountyhunter.repository.world;

import com.developers.bountyhunter.model.world.Galaxy;
import com.developers.bountyhunter.model.world.Planet;
import com.developers.bountyhunter.model.world.PlanetType;
import com.developers.bountyhunter.repository.base.BaseRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PlanetRepository extends BaseRepository<Planet, Long> {

    Optional<Planet> findPlanetByGalaxyAndPlanetType (Galaxy galaxy, PlanetType planetType);
}
