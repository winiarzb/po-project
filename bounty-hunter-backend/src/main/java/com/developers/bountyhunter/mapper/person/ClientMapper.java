package com.developers.bountyhunter.mapper.person;

import com.developers.bountyhunter.dto.person.ClientDTO;
import com.developers.bountyhunter.model.person.Client;
import org.mapstruct.Mapper;

@Mapper
public interface ClientMapper {

	ClientDTO clientToClientDTO(Client client);
	Client clientDTOtoClient(ClientDTO clientDTO);

}
