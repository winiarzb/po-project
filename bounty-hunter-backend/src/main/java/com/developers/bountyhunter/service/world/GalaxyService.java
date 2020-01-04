package com.developers.bountyhunter.service.world;

import com.developers.bountyhunter.model.world.Galaxy;
import com.developers.bountyhunter.service.base.BaseService;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public interface GalaxyService extends BaseService<Galaxy, Long> {

    Optional<Galaxy> findGalaxyByGalaxyName(String galaxyName);
}
