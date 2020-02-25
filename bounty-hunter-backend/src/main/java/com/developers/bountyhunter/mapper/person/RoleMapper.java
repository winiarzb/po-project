package com.developers.bountyhunter.mapper.person;

import com.developers.bountyhunter.dto.person.role.RoleDTO;
import com.developers.bountyhunter.dto.person.role.RoleFormDTO;
import com.developers.bountyhunter.model.person.role.Role;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper
public interface RoleMapper {

    RoleDTO roleToRoleDTO(Role role);

    Role roleDTOToRole(RoleDTO roleDTO);

    Role roleFormDTOToRole(RoleFormDTO roleFormDTO);

    List<RoleDTO> rolesToRolesDTO(List<Role> roles);

    List<Role> rolesDTOtoRoles(List<RoleDTO> rolesDTOS);
}
