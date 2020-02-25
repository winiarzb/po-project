package com.developers.bountyhunter.dto.base;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import java.io.Serializable;
import java.util.Date;

@Data
public abstract class IdentifiableDTO implements Serializable {

	private Long id;
	private Integer version;
	@JsonIgnore
	private Date recordCreationDate;
	@JsonIgnore
	private Date recordModificationDate;

}
