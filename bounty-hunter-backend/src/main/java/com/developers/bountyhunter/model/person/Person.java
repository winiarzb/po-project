package com.developers.bountyhunter.model.person;

import com.developers.bountyhunter.model.base.IdentifiableEntity;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import java.util.Date;

@Entity
@Data
@Inheritance(strategy = InheritanceType.JOINED)
public abstract class Person extends IdentifiableEntity {

	private String name;
	private String alias;
	private Date birthDate;

}
