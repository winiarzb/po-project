package com.developers.bountyhunter.model.dictionary;

import com.developers.bountyhunter.model.base.IdentifiableEntity;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;

@Entity
@Data
public class Dict extends IdentifiableEntity {

	private String value;

	@Enumerated(EnumType.STRING)
	private DictType type;

}
