package com.developers.bountyhunter.dto.person;

import com.developers.bountyhunter.model.person.ThreatLevel;
import lombok.Data;

@Data
public class VictimDTO extends PersonDTO{

	private int age;
	private boolean forceSensitive;
	private ThreatLevel threatLevel;

}
