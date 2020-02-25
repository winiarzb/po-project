package com.developers.bountyhunter.service.contract;

import com.developers.bountyhunter.model.contract.Contract;
import com.developers.bountyhunter.model.contract.ContractStatus;
import com.developers.bountyhunter.model.person.UserAccount;
import com.developers.bountyhunter.model.person.role.Role;
import com.developers.bountyhunter.model.person.role.UserRole;
import com.developers.bountyhunter.repository.contract.ContractRepository;
import com.developers.bountyhunter.service.base.BaseServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.List;

@Component
@RequiredArgsConstructor
public class ContractServiceImpl extends BaseServiceImpl<Contract, Long> implements ContractService {

	private final ContractRepository contractRepository;

	@Override
	public void changeContractStatusWhenAuctionIsFinished() {
		List<Contract> contracts = contractRepository.findAllByThruDateBeforeAndContractStatus(Timestamp.valueOf(LocalDateTime.now()), ContractStatus.CREATED);
		contracts.forEach(contract -> {
			ContractStatus contractStatus = contract.getHunter() != null ? ContractStatus.IN_PROGRESS : ContractStatus.CANCELED;
			contract.setContractStatus(contractStatus);
			contractRepository.save(contract);
		});
	}

	@Override
	public List<Contract> findAllByAccount(UserAccount userAccount) {

		if (userAccount.getRole().getRoleName().equals(UserRole.HUNTER)) {
			return contractRepository.findAllByHunter(userAccount);
		} else {
			return contractRepository.findAllByClient(userAccount);
		}

	}

	@Override
	public List<Contract> findAllByContractStatus(ContractStatus contractStatus) {
		return contractRepository.findAllByContractStatus(contractStatus);
	}
}


