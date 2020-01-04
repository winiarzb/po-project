package com.developers.bountyhunter.repository.world;

import com.developers.bountyhunter.model.world.Galaxy;
import com.developers.bountyhunter.model.world.Planet;
import com.developers.bountyhunter.model.world.PlanetType;
import com.developers.bountyhunter.repository.base.BaseRepository;
import org.springframework.stereotype.Repository;

import javax.swing.text.html.Option;
import java.util.Optional;

@Repository
public interface PlanetRepository extends BaseRepository<Planet, Long> {

    Optional<Planet> findPlanetByName(String planetName);
    Optional<Planet> findPlanetByPlanetType(PlanetType planetType);
    Optional<Planet> findPlanetByGalaxyAndPlanetType(Galaxy galaxy, PlanetType planetType);
}
