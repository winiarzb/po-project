package com.developers.bountyhunter.repository.contract;

import com.developers.bountyhunter.model.contract.Contract;
import com.developers.bountyhunter.model.contract.ContractStatus;
import com.developers.bountyhunter.model.person.UserAccount;
import com.developers.bountyhunter.repository.base.BaseRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ContractRepository extends BaseRepository<Contract, Long> {
    @Query(nativeQuery = true, value = "SELECT * FROM contract WHERE thru_date <= (NOW() - INTERVAL 0 SECOND) AND CONTRACT_STATUS = 'CREATED'")
    List<Contract> contractAuctionOver();

    List<Contract> findAllByContractStatus(ContractStatus contractStatus);

    List<Contract> findAllByClient(UserAccount userAccount);

    List<Contract> findAllByHunter(UserAccount userAccount);
}
