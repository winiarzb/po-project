package com.developers.bountyhunter.model.person;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import java.util.Date;

@Entity
@Data
public class UserAccount extends Person{

	private String username;
	private String password;
	private Date registeredDate;
	private boolean enabled;

	@Enumerated(EnumType.STRING)
	private UserRole userRole;
}
