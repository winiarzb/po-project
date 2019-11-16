package com.developers.bountyhunter.service.dictionary;

import com.developers.bountyhunter.model.dictionary.Dict;
import com.developers.bountyhunter.model.dictionary.DictType;
import com.developers.bountyhunter.repository.dictionary.DictRepository;
import com.developers.bountyhunter.service.base.BaseServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@RequiredArgsConstructor
public class DictServiceImpl extends BaseServiceImpl<Dict, Long> implements DictService {

	private final DictRepository dictRepository;

	public List<Dict> findAllByType(DictType dictType) {
		return dictRepository.findAllByType(dictType);
	}

}
