package com.developers.bountyhunter.service.world;

import com.developers.bountyhunter.model.world.District;
import com.developers.bountyhunter.repository.world.DistrictRepository;
import com.developers.bountyhunter.service.base.BaseServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class DistrictServiceImpl extends BaseServiceImpl<District, Long> implements DistrictService {

	private final DistrictRepository districtRepository;

}
