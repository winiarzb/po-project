package com.developers.bountyhunter.mapper.person;

import com.developers.bountyhunter.dto.person.VictimDTO;
import com.developers.bountyhunter.model.person.Victim;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper
public interface VictimMapper {

	VictimDTO victimToVictimDTO(Victim victim);
	Victim victimDTOtoVictim(VictimDTO victimDTO);

	List<VictimDTO> victimsToVictimsDTO(List<Victim> victims);
	List<Victim> victimsDTOtoVictims(List<VictimDTO> victimDTOS);

}
