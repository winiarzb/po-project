package com.developers.bountyhunter.dto.contract;

import com.developers.bountyhunter.model.contract.ContractStatus;
import lombok.Data;

@Data
public class ContractChangeStatusCommand {

    private ContractStatus contractStatus;
    private Long contractId;

}
