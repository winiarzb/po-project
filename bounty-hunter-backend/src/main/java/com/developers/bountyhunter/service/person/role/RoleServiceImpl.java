package com.developers.bountyhunter.service.person.role;

import com.developers.bountyhunter.model.person.role.Role;
import com.developers.bountyhunter.model.person.role.UserRole;
import com.developers.bountyhunter.repository.person.role.RoleRepository;
import com.developers.bountyhunter.service.base.BaseServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
@RequiredArgsConstructor
public class RoleServiceImpl extends BaseServiceImpl<Role, Long> implements RoleService {

    private final RoleRepository roleRepository;

    public Optional<Role> findRoleByName(UserRole userRole) {
        return roleRepository.findByRoleName(userRole);
    }
}
