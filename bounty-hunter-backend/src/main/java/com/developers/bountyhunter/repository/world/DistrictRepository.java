package com.developers.bountyhunter.repository.world;

import com.developers.bountyhunter.model.world.District;
import com.developers.bountyhunter.model.world.Planet;
import com.developers.bountyhunter.repository.base.BaseRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface DistrictRepository extends BaseRepository<District, Long> {

    Optional<District> findDistrictByName(String districtName);
    List<District> findDistrictsByPlanet(Planet planet);

}
