package com.developers.bountyhunter.dto.world;

import com.developers.bountyhunter.dto.base.IdentifiableDTO;
import com.developers.bountyhunter.model.world.PlanetType;
import com.fasterxml.jackson.annotation.JsonFilter;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import javax.validation.constraints.NotEmpty;
import java.util.List;

@Data
public class PlanetDTO extends IdentifiableDTO {

	@NotEmpty
	@ApiModelProperty(notes = "Planet name cannot be empty")
	private String name;
	private PlanetType planetType;
	private List<DistrictDTO> districts;

}
