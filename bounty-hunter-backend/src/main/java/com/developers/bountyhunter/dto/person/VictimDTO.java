package com.developers.bountyhunter.dto.person;

import com.developers.bountyhunter.dto.base.IdentifiableDTO;
import com.developers.bountyhunter.dto.contract.ContractDTO;
import lombok.Data;

@Data
public class VictimDTO extends IdentifiableDTO {

	private ContractDTO contract;

}
