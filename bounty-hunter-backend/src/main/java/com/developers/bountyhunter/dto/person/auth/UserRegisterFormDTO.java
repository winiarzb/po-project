package com.developers.bountyhunter.dto.person.auth;

import com.developers.bountyhunter.dto.person.role.RoleDTO;
import com.developers.bountyhunter.dto.world.DistrictDTO;
import com.developers.bountyhunter.dto.world.GalaxyDTO;
import com.developers.bountyhunter.dto.world.PlanetDTO;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;
import java.util.ArrayList;
import java.util.List;

@Data
@ApiModel(description = "Model for register form")
public class UserRegisterFormDTO {

    @NotEmpty(message = "Username cannot be empty")
    @Size(max = 20, message = "Username is too long")
    @ApiModelProperty(notes = "Username should have between 0-20 characters and cannot be empty")
    private String username;

    @NotEmpty(message = "Password cannot be empty")
    @Size(min = 7, max = 20, message = "Password should have between 7-20 characters")
    @ApiModelProperty(notes = "Password should have between 7-20 characters and cannot be empty")
    private String password;

    private RoleDTO role;

    private GalaxyDTO galaxy;

    private List<PlanetDTO> planets = new ArrayList<>();

    private List<DistrictDTO> districts = new ArrayList<>();

}
