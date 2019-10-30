package com.developers.bountyhunter.mapper.person;

import com.developers.bountyhunter.dto.person.UserAccountDTO;
import com.developers.bountyhunter.model.person.UserAccount;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper
public interface UserAccountMapper {

	UserAccountDTO userAccountToUserAccountDTO(UserAccount userAccount);
	UserAccount userAccountDTOtoUserAccount(UserAccountDTO userAccountDTO);

	List<UserAccountDTO> userAccountsToUserAccountsDTO(List<UserAccount> userAccounts);
	List<UserAccount> userAccountsDTOtoUserAccounts(List<UserAccountDTO> userAccountsDTO);

}
