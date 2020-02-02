package com.developers.bountyhunter.repository.contract;

import com.developers.bountyhunter.model.contract.Contract;
import com.developers.bountyhunter.model.contract.ContractStatus;
import com.developers.bountyhunter.model.person.UserAccount;
import com.developers.bountyhunter.repository.base.BaseRepository;
import org.springframework.stereotype.Repository;

import java.sql.Timestamp;
import java.util.List;

@Repository
public interface ContractRepository extends BaseRepository<Contract, Long> {

    List<Contract> findAllByThruDateBeforeAndContractStatus(Timestamp timestamp, ContractStatus contractStatus);

    List<Contract> findAllByContractStatus(ContractStatus contractStatus);

    List<Contract> findAllByClient(UserAccount userAccount);

    List<Contract> findAllByHunter(UserAccount userAccount);
}
