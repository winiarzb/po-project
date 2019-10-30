package com.developers.bountyhunter.model.person;

import com.developers.bountyhunter.model.base.IdentifiableEntity;
import lombok.Data;

import javax.persistence.MappedSuperclass;
import java.util.Date;

@Data
@MappedSuperclass
public abstract class Person extends IdentifiableEntity {

	private String name;
	private String alias;
	private Date birthDate;

}
