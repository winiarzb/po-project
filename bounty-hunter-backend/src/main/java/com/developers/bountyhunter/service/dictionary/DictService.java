package com.developers.bountyhunter.service.dictionary;

import com.developers.bountyhunter.model.dictionary.Dict;
import com.developers.bountyhunter.model.dictionary.DictType;
import com.developers.bountyhunter.service.base.BaseService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface DictService extends BaseService<Dict, Long> {

	List<Dict> findAllByType(DictType dictType);

}
