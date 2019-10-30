package com.developers.bountyhunter.dto.world;

import com.developers.bountyhunter.dto.base.IdentifiableDTO;
import com.developers.bountyhunter.dto.contract.ContractDTO;
import lombok.Data;

import java.util.List;

@Data
public class DistrictDTO extends IdentifiableDTO {

	private String name;
	private List<ContractDTO> contracts;
	private PlanetDTO planet;

}
