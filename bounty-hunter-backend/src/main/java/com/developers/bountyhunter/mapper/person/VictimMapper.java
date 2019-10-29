package com.developers.bountyhunter.mapper.person;

import com.developers.bountyhunter.dto.person.VictimDTO;
import com.developers.bountyhunter.model.person.Victim;
import org.mapstruct.Mapper;

@Mapper
public interface VictimMapper {

	VictimDTO victimToVictimDTO(Victim victim);
	Victim victimDTOtoVictim(VictimDTO victimDTO);

}
