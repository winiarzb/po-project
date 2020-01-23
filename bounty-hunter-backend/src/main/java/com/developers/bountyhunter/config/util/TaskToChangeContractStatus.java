package com.developers.bountyhunter.config.util;

import com.developers.bountyhunter.service.contract.ContractService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
public class TaskToChangeContractStatus {

    @Autowired
    private ContractService contractService;
    @Scheduled(fixedRate = 10000)
    public void printInfo() {
        contractService.changeContractStatusWhenAuctionIsFinished();
    }
}
