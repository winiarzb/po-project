package com.developers.bountyhunter.service.person.role;

import com.developers.bountyhunter.dto.person.role.RoleDTO;
import com.developers.bountyhunter.model.person.role.Role;
import com.developers.bountyhunter.model.person.role.UserRole;
import com.developers.bountyhunter.service.base.BaseService;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public interface RoleService extends BaseService<Role, Long> {

    Optional<Role> findRoleByName(UserRole userRole);
}
