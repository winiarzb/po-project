package com.developers.bountyhunter.repository.person;

import com.developers.bountyhunter.model.person.UserAccount;
import com.developers.bountyhunter.model.person.role.Role;
import com.developers.bountyhunter.repository.base.BaseRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserAccountRepository extends BaseRepository<UserAccount, Long> {

    Optional<UserAccount> findByUsername(String username);
    boolean existsByUsername(String username);

    List<UserAccount> findByRole(Role role);
}
