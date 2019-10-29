package com.developers.bountyhunter.mapper.contract;

import com.developers.bountyhunter.dto.contract.ContractDTO;
import com.developers.bountyhunter.model.contract.Contract;
import org.mapstruct.Mapper;

@Mapper
public interface ContractMapper {

	ContractDTO contractToContractDTO(Contract contract);
	Contract contractDTOtoContract(ContractDTO contractDTO);

}
