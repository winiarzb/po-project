package com.developers.bountyhunter.service.base;

import com.developers.bountyhunter.model.base.IdentifiableEntity;

import java.util.List;
import java.util.Optional;

public interface BaseService<T extends IdentifiableEntity, ID> {

	List<T> findAll();

	Optional<T> findById(ID id);

	T save(T t);

	void deleteById(ID id);

}
