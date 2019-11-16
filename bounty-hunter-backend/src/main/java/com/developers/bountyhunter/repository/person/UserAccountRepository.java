package com.developers.bountyhunter.repository.person;

import com.developers.bountyhunter.model.person.UserAccount;
import com.developers.bountyhunter.repository.base.BaseRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserAccountRepository extends BaseRepository<UserAccount, Long> {
}
