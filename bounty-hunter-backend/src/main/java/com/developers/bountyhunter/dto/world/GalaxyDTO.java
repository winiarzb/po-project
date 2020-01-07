package com.developers.bountyhunter.dto.world;

import com.developers.bountyhunter.dto.base.IdentifiableDTO;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import javax.validation.constraints.NotEmpty;
import java.util.List;

@Data
@ApiModel
public class GalaxyDTO extends IdentifiableDTO {

	@NotEmpty
	@ApiModelProperty(notes = "Galaxy name cannot be empty")
	private String name;

	private List<PlanetDTO> planets;

}
