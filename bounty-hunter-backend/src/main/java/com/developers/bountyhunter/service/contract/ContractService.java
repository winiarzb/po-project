package com.developers.bountyhunter.service.contract;

import com.developers.bountyhunter.model.contract.Contract;
import com.developers.bountyhunter.model.contract.ContractStatus;
import com.developers.bountyhunter.model.person.UserAccount;
import com.developers.bountyhunter.service.base.BaseService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ContractService extends BaseService<Contract, Long> {
    void changeContractStatusWhenAuctionIsFinished();

    List<Contract> findAllByAccount(UserAccount userAccount);

    List<Contract> findAllByContractStatus(ContractStatus contractStatus);
}
