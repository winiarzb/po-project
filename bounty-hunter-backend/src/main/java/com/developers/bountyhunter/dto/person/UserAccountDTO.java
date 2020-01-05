package com.developers.bountyhunter.dto.person;

import com.developers.bountyhunter.model.person.role.UserRole;
import lombok.Data;

import java.util.Date;

@Data
public class UserAccountDTO extends PersonDTO {

	private String username;
	private String password;
	private Date registeredDate;
	private boolean enabled;
	private UserRole userRole;

}
