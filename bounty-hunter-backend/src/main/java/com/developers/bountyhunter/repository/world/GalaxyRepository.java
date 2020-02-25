package com.developers.bountyhunter.repository.world;

import com.developers.bountyhunter.model.world.Galaxy;
import com.developers.bountyhunter.model.world.Planet;
import com.developers.bountyhunter.repository.base.BaseRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface GalaxyRepository extends BaseRepository<Galaxy, Long> {

    Optional<Galaxy> findGalaxyByName(String galaxyName);
}
