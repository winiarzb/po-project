package com.developers.bountyhunter.mapper.contract;

import com.developers.bountyhunter.dto.contract.ContractDTO;
import com.developers.bountyhunter.model.contract.Contract;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper
public interface ContractMapper {

	ContractDTO contractToContractDTO(Contract contract);
	Contract contractDTOtoContract(ContractDTO contractDTO);

	List<ContractDTO> contractsToContractsDTO(List<Contract> contracts);
	List<Contract> contractsDTOtoContracts(List<ContractDTO> contractsDTO);

}
