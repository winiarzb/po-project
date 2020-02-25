package com.developers.bountyhunter.dto.contract;

import lombok.Data;

@Data
public class ContractChangePaymentCommand {

    private int payment;
    private Long contractId;
    private Long hunterId;

}
