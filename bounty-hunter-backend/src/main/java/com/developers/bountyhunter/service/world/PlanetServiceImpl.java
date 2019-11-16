package com.developers.bountyhunter.service.world;

import com.developers.bountyhunter.model.world.Planet;
import com.developers.bountyhunter.repository.world.PlanetRepository;
import com.developers.bountyhunter.service.base.BaseServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class PlanetServiceImpl extends BaseServiceImpl<Planet, Long> implements PlanetService {

	private final PlanetRepository planetRepository;

}
