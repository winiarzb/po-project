package com.developers.bountyhunter.service.world;

import com.developers.bountyhunter.model.world.District;
import com.developers.bountyhunter.service.base.BaseService;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public interface DistrictService extends BaseService<District, Long> {

    Optional<District> findByDistrictName(String districtName);
}
