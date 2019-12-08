package com.developers.bountyhunter.dto.world;

import lombok.Data;

import java.util.List;

@Data
public class GalaxyFormDTO {

	private String name;
	private List<Long> planetsId;

}
