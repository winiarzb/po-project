package com.developers.bountyhunter.model.person;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;

@Entity
@Data
public class Victim extends Person {

	private int age;
	private boolean forceSensitive;

	@Enumerated(EnumType.STRING)
	private ThreatLevel threatLevel;

}
