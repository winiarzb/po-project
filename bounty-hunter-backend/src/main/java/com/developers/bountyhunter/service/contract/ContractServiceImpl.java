package com.developers.bountyhunter.service.contract;

import com.developers.bountyhunter.model.contract.Contract;
import com.developers.bountyhunter.repository.contract.ContractRepository;
import com.developers.bountyhunter.service.base.BaseServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class ContractServiceImpl extends BaseServiceImpl<Contract, Long> implements ContractService {

	private final ContractRepository contractRepository;

}
