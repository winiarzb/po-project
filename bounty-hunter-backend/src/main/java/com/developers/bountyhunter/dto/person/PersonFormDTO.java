package com.developers.bountyhunter.dto.person;

import lombok.Data;

import java.util.Date;

@Data
public abstract class PersonFormDTO {

	private String name;
	private String alias;
	private Date birthDate;

}
