package com.developers.bountyhunter.mapper.world;

import com.developers.bountyhunter.dto.world.DistrictDTO;
import com.developers.bountyhunter.model.world.District;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper
public interface DistrictMapper {

	DistrictDTO districtToDistrictDTO(District district);
	District districtDTOtoDistrict(DistrictDTO districtDTO);

	List<DistrictDTO> districtsToDistrictsDTO(List<District> districts);
	List<District> disctrictsDTOtoDistricts(List<DistrictDTO> districtsDTO);

}
