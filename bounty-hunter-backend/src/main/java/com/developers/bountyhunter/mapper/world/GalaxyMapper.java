package com.developers.bountyhunter.mapper.world;

import com.developers.bountyhunter.dto.world.GalaxyDTO;
import com.developers.bountyhunter.model.world.Galaxy;
import org.mapstruct.Mapper;

@Mapper
public interface GalaxyMapper {

	GalaxyDTO galaxyToGalaxyDTO(Galaxy galaxy);
	Galaxy galaxyDTOtoGalaxy(GalaxyDTO galaxyDTO);

}
