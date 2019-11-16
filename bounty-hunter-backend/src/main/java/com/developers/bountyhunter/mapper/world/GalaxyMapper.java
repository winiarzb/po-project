package com.developers.bountyhunter.mapper.world;

import com.developers.bountyhunter.dto.world.GalaxyDTO;
import com.developers.bountyhunter.dto.world.GalaxyFormDTO;
import com.developers.bountyhunter.model.world.Galaxy;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper
public interface GalaxyMapper {

	GalaxyDTO galaxyToGalaxyDTO(Galaxy galaxy);
	Galaxy galaxyDTOtoGalaxy(GalaxyDTO galaxyDTO);
	Galaxy galaxyFormDTOtoGalaxy(GalaxyFormDTO galaxyFormDTO);

	List<GalaxyDTO> galaxiesToGalaxiesDTO(List<Galaxy> galaxies);
	List<Galaxy> galaxiesDTOtoGalaxies(List<GalaxyDTO> galaxiesDTO);

}
