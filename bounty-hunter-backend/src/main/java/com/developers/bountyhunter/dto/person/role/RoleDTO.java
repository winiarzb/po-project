package com.developers.bountyhunter.dto.person.role;

import com.developers.bountyhunter.dto.base.IdentifiableDTO;
import com.developers.bountyhunter.model.person.role.UserRole;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import io.swagger.annotations.ApiResponses;
import lombok.Data;

import javax.validation.constraints.NotEmpty;

@Data
@ApiModel(description = "Role model")
public class RoleDTO extends IdentifiableDTO {

    @NotEmpty
    @ApiModelProperty(notes = "Role name cannot be empty")
    private UserRole roleName;
}
