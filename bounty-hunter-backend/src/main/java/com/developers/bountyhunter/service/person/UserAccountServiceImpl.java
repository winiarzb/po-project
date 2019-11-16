package com.developers.bountyhunter.service.person;

import com.developers.bountyhunter.model.person.UserAccount;
import com.developers.bountyhunter.repository.person.UserAccountRepository;
import com.developers.bountyhunter.service.base.BaseServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class UserAccountServiceImpl extends BaseServiceImpl<UserAccount, Long> implements UserAccountService {

	private final UserAccountRepository userAccountRepository;

}
