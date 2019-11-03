package com.developers.bountyhunter.mapper.dictionary;

import com.developers.bountyhunter.dto.dictionary.DictDTO;
import com.developers.bountyhunter.model.dictionary.Dict;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper
public interface DictMapper {

	DictDTO dictToDictDTO(Dict dict);
	Dict dictDTOtoDict(DictDTO dictDTO);

	List<DictDTO> dictsToDictsDTO(List<Dict> dicts);
	List<Dict> dictsDTOtoDicts(List<DictDTO> dictsDTO);

}
