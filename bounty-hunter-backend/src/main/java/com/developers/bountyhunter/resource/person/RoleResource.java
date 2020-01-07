package com.developers.bountyhunter.resource.person;

import com.developers.bountyhunter.dto.person.role.RoleDTO;
import com.developers.bountyhunter.dto.person.role.RoleFormDTO;
import com.developers.bountyhunter.mapper.person.RoleMapper;
import com.developers.bountyhunter.model.person.role.Role;
import com.developers.bountyhunter.service.person.role.RoleService;
import lombok.RequiredArgsConstructor;
import org.mapstruct.factory.Mappers;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/role")
@RequiredArgsConstructor
public class RoleResource {

    private final RoleService roleService;
    private RoleMapper roleMapper = Mappers.getMapper(RoleMapper.class);

    @GetMapping("/{id}")
    private ResponseEntity<RoleDTO> getById(@PathVariable("id") Long id) {

        Optional<Role> role = roleService.findById(id);

        return role.map(value -> new ResponseEntity<>(roleMapper.roleToRoleDTO(value), HttpStatus.OK)).
                orElseGet(() -> new ResponseEntity<>(null, HttpStatus.NOT_FOUND));
    }

    @GetMapping("/all")
    private ResponseEntity<List<RoleDTO>> getAll() {

        List<RoleDTO> rolesDTO = roleMapper.rolesToRolesDTO(roleService.findAll());
        return new ResponseEntity<>(rolesDTO, HttpStatus.OK);
    }

    @PostMapping()
    private ResponseEntity<RoleDTO> createRole(@Valid @RequestBody RoleFormDTO roleFormDTO, BindingResult bindingResult) {

        if (bindingResult.hasErrors()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        Role role = roleMapper.roleFormDTOToRole(roleFormDTO);
        role = roleService.save(role);
        RoleDTO roleDTO = roleMapper.roleToRoleDTO(role);

        return new ResponseEntity<>(roleDTO, HttpStatus.CREATED);
    }

    @PutMapping()
    private ResponseEntity<RoleDTO> updateRole(@Valid @RequestBody RoleDTO roleDTO, BindingResult bindingResult) {

        if (bindingResult.hasErrors()) {
            return new ResponseEntity<>(roleDTO, HttpStatus.BAD_REQUEST);
        }

        Optional<Role> role = roleService.findById(roleDTO.getId());

        if (role.isPresent()) {
            roleService.save(roleMapper.roleDTOToRole(roleDTO));
            return new ResponseEntity<>(roleDTO, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(roleDTO, HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    private ResponseEntity<RoleDTO> deleteRole(@PathVariable Long id) {

        Optional<Role> role = roleService.findById(id);

        if (role.isPresent()) {
            roleService.deleteById(id);
            return new ResponseEntity<>(null, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);

        }
    }

}
