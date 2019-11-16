package com.developers.bountyhunter.repository.contract;

import com.developers.bountyhunter.model.contract.Contract;
import com.developers.bountyhunter.repository.base.BaseRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContractRepository extends BaseRepository<Contract, Long> {

}
