package com.developers.bountyhunter.service.world;

import com.developers.bountyhunter.model.world.District;
import com.developers.bountyhunter.model.world.Planet;
import com.developers.bountyhunter.repository.world.DistrictRepository;
import com.developers.bountyhunter.service.base.BaseServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
@RequiredArgsConstructor
public class DistrictServiceImpl extends BaseServiceImpl<District, Long> implements DistrictService {

	private final DistrictRepository districtRepository;

	@Override
	public Optional<District> findByDistrictName(String districtName) {
		return districtRepository.findDistrictByName(districtName);
	}

	@Override
	public List<District> findDistrictsByPlanet(Planet planet) {
		return districtRepository.findDistrictsByPlanet(planet);
	}
}
