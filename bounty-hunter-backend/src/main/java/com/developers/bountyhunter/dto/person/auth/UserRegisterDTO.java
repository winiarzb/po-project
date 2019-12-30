package com.developers.bountyhunter.dto.person.auth;

import com.developers.bountyhunter.dto.person.role.RoleDTO;
import com.developers.bountyhunter.dto.world.GalaxyDTO;
import lombok.Data;

@Data
public class UserRegisterDTO {

    private String username;
    private String password;
    private RoleDTO role;
    private GalaxyDTO galaxy;

}
