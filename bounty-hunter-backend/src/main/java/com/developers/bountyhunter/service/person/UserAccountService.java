package com.developers.bountyhunter.service.person;

import com.developers.bountyhunter.model.person.UserAccount;
import com.developers.bountyhunter.service.base.BaseService;
import org.springframework.stereotype.Service;

@Service
public interface UserAccountService extends BaseService<UserAccount, Long> {
}
