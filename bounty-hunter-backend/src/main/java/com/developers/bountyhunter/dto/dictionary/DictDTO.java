package com.developers.bountyhunter.dto.dictionary;

import com.developers.bountyhunter.dto.base.IdentifiableDTO;
import com.developers.bountyhunter.model.dictionary.DictType;
import lombok.Data;

@Data
public class DictDTO extends IdentifiableDTO {

	private String value;
	private DictType type;

}
