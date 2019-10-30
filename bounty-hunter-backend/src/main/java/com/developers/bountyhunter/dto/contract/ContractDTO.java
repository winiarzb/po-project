package com.developers.bountyhunter.dto.contract;

import com.developers.bountyhunter.dto.base.IdentifiableDTO;
import com.developers.bountyhunter.dto.person.UserAccountDTO;
import com.developers.bountyhunter.dto.person.VictimDTO;
import com.developers.bountyhunter.dto.review.ReviewDTO;
import com.developers.bountyhunter.dto.world.DistrictDTO;
import com.developers.bountyhunter.model.contract.ContractStatus;
import com.developers.bountyhunter.model.contract.Priority;
import lombok.Data;

import java.util.Date;

@Data
public class ContractDTO extends IdentifiableDTO {

	private String name;
	private ContractStatus contractStatus;
	private int payment;
	private Priority priority;
	private Date fromDate;
	private Date thruDate;
	private UserAccountDTO hunter;
	private UserAccountDTO client;
	private VictimDTO victim;
	private DistrictDTO district;
	private ReviewDTO review;


}
