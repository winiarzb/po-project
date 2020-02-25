package com.developers.bountyhunter.model.person;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.PrimaryKeyJoinColumn;

@Entity
@Data
@PrimaryKeyJoinColumn(name = "person_id")
public class Victim extends Person {

	private int age;
	private boolean forceSensitive;

	@Enumerated(EnumType.STRING)
	private ThreatLevel threatLevel;

}
