package com.developers.bountyhunter.mapper.world;

import com.developers.bountyhunter.dto.world.DistrictDTO;
import com.developers.bountyhunter.model.world.District;
import org.mapstruct.Mapper;

@Mapper
public interface DistrictMapper {

	DistrictDTO districtToDistrictDTO(District district);
	District districtDTOtoDistrict(DistrictDTO districtDTO);

}
