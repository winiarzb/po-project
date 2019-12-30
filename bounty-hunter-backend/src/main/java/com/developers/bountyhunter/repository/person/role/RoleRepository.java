package com.developers.bountyhunter.repository.person.role;

import com.developers.bountyhunter.model.person.role.Role;
import com.developers.bountyhunter.model.person.role.UserRole;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByRoleName(UserRole userRoleName);
}
