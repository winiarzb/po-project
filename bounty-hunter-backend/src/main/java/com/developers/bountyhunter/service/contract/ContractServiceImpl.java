package com.developers.bountyhunter.service.contract;

import com.developers.bountyhunter.model.contract.Contract;
import com.developers.bountyhunter.model.contract.ContractStatus;
import com.developers.bountyhunter.repository.contract.ContractRepository;
import com.developers.bountyhunter.service.base.BaseServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@RequiredArgsConstructor
public class ContractServiceImpl extends BaseServiceImpl<Contract, Long> implements ContractService {

	private final ContractRepository contractRepository;

	@Override
	public boolean changeContractStatusWhenAuctionIsFinished() {
		List<Contract> contracts = contractRepository.contractAuctionOver();
		contracts.forEach(contract -> {
			contract.setContractStatus(ContractStatus.CANCELED);
			contractRepository.save(contract);
		});
		return true;
	}
}


