package com.developers.bountyhunter.service;

import com.developers.bountyhunter.model.dictionary.Dict;
import com.developers.bountyhunter.model.dictionary.DictType;
import com.developers.bountyhunter.repository.dictionary.DictRepository;
import com.developers.bountyhunter.service.base.BaseServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DictService extends BaseServiceImpl<Dict, Long> {

	@Autowired
	private DictRepository dictRepository;

	public List<Dict> findAllByType(DictType dictType) {
		return dictRepository.findAllByType(dictType);
	}

}
