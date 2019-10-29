package com.developers.bountyhunter.dto.person;

import com.developers.bountyhunter.dto.base.IdentifiableDTO;
import com.developers.bountyhunter.dto.contract.ContractDTO;
import lombok.Data;

import java.util.List;

@Data
public class ClientDTO extends IdentifiableDTO {

	private List<ContractDTO> contracts;

}
