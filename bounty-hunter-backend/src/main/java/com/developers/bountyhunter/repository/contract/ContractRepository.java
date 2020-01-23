package com.developers.bountyhunter.repository.contract;

import com.developers.bountyhunter.model.contract.Contract;
import com.developers.bountyhunter.repository.base.BaseRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ContractRepository extends BaseRepository<Contract, Long> {
    @Query(nativeQuery = true, value = "SELECT * FROM contract WHERE thru_date <= (NOW() - INTERVAL 0 SECOND)")
    List<Contract> contractAuctionOver();
}
