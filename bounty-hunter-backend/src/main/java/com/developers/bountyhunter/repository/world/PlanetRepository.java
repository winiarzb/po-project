package com.developers.bountyhunter.repository.world;

import com.developers.bountyhunter.model.world.Planet;
import com.developers.bountyhunter.repository.base.BaseRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PlanetRepository extends BaseRepository<Planet, Long> {
}
