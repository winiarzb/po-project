package com.developers.bountyhunter.service.person;

import com.developers.bountyhunter.model.person.UserAccount;
import com.developers.bountyhunter.model.person.role.Role;
import com.developers.bountyhunter.repository.person.UserAccountRepository;
import com.developers.bountyhunter.service.base.BaseServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
@RequiredArgsConstructor
public class UserAccountServiceImpl extends BaseServiceImpl<UserAccount, Long> implements UserAccountService {

	private final UserAccountRepository userAccountRepository;

	@Override
	public Optional<UserAccount> findByUsername(String username) {
		return userAccountRepository.findByUsername(username);
	}

	@Override
	public boolean existsByUsername(String username) {
		return userAccountRepository.existsByUsername(username);
	}

	@Override
	public List<UserAccount> findByRole(Role role) {
		return userAccountRepository.findByRole(role);
	}
}
