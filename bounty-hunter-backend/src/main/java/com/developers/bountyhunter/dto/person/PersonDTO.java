package com.developers.bountyhunter.dto.person;

import com.developers.bountyhunter.dto.base.IdentifiableDTO;
import lombok.Data;

import java.util.Date;

@Data
public class PersonDTO extends IdentifiableDTO {

	private String name;
	private String lastName;
	private Date birthdate;

}
