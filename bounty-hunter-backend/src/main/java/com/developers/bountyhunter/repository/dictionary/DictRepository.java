package com.developers.bountyhunter.repository.dictionary;

import com.developers.bountyhunter.model.dictionary.Dict;
import com.developers.bountyhunter.model.dictionary.DictType;
import com.developers.bountyhunter.repository.base.BaseRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DictRepository extends BaseRepository<Dict, Long> {

	List<Dict> findAllByType(DictType dictType);

}
