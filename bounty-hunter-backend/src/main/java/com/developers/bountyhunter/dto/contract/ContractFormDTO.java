package com.developers.bountyhunter.dto.contract;

import com.developers.bountyhunter.model.contract.ContractStatus;
import com.developers.bountyhunter.model.contract.Priority;
import lombok.Data;

import java.util.Date;

@Data
public class ContractFormDTO {

	private String name;
	private ContractStatus contractStatus;
	private int payment;
	private Priority priority;
	private Date fromDate;
	private Date thruDate;
	private Long clientId;
	private Long victimId;
	private Long districtId;

}
