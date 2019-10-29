package com.developers.bountyhunter.dto.contract;

import com.developers.bountyhunter.dto.base.IdentifiableDTO;
import com.developers.bountyhunter.dto.person.ClientDTO;
import com.developers.bountyhunter.dto.person.VictimDTO;
import com.developers.bountyhunter.dto.world.DistrictDTO;
import com.developers.bountyhunter.model.contract.ContractStatus;
import com.developers.bountyhunter.model.contract.Priority;
import lombok.Data;

import java.util.Date;

@Data
public class ContractDTO extends IdentifiableDTO {

	private ContractStatus contractStatus;
	private int payment;
	private Priority priority;
	private Date fromDate;
	private Date thruDate;

	private DistrictDTO district;
	private ClientDTO client;
	private VictimDTO victim;

}
