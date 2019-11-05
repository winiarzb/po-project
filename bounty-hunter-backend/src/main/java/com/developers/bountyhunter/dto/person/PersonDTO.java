package com.developers.bountyhunter.dto.person;

import com.developers.bountyhunter.dto.base.IdentifiableDTO;
import lombok.Data;

import java.util.Date;

@Data
public abstract class PersonDTO extends IdentifiableDTO {

	private String name;
	private String alias;
	private Date birthDate;

}
