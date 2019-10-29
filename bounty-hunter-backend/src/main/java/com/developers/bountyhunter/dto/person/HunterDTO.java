package com.developers.bountyhunter.dto.person;

import com.developers.bountyhunter.dto.base.IdentifiableDTO;
import com.developers.bountyhunter.dto.review.ReviewDTO;
import com.developers.bountyhunter.dto.world.DistrictDTO;
import lombok.Data;

import java.util.List;

@Data
public class HunterDTO extends IdentifiableDTO {

	private List<DistrictDTO> districts;
	private List<ReviewDTO> reviews;

}
