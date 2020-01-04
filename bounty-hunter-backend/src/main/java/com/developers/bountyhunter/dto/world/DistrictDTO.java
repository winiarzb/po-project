package com.developers.bountyhunter.dto.world;

import com.developers.bountyhunter.dto.base.IdentifiableDTO;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import javax.validation.constraints.NotEmpty;

@Data
public class DistrictDTO extends IdentifiableDTO {

	@NotEmpty
	@ApiModelProperty(notes = "District name cannot be empty")
	private String districtName;

}
