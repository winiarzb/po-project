package com.developers.bountyhunter.dto.world;

import com.developers.bountyhunter.model.world.PlanetType;
import lombok.Data;

import java.util.List;

@Data
public class PlanetFormDTO {

	private String name;
	private PlanetType planetType;
	private Long galaxyId;
	private List<Long> districtsIds;

}
