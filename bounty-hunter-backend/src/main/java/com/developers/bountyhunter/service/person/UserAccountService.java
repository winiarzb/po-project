package com.developers.bountyhunter.service.person;

import com.developers.bountyhunter.model.person.UserAccount;
import com.developers.bountyhunter.service.base.BaseService;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public interface UserAccountService extends BaseService<UserAccount, Long> {

    Optional<UserAccount> findByUsername(String username);
    boolean existsByUsername(String username);
}
