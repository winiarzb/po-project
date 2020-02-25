package com.developers.bountyhunter.dto.person.role;

import com.developers.bountyhunter.model.person.role.UserRole;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import javax.validation.constraints.NotEmpty;

@Data
@ApiModel(description = "Model for adding new role")
public class RoleFormDTO {

    @NotEmpty
    @ApiModelProperty(notes = "Role name cannot be empty")
    private UserRole userRole;
}
