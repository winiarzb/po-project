package com.developers.bountyhunter.mapper.person;

import com.developers.bountyhunter.dto.person.HunterDTO;
import com.developers.bountyhunter.model.person.Hunter;
import org.mapstruct.Mapper;

@Mapper
public interface HunterMapper {

	HunterDTO hunterToHunterDTO(Hunter hunter);
	Hunter hunterDTOtoHunter(HunterDTO hunterDTO);

}
