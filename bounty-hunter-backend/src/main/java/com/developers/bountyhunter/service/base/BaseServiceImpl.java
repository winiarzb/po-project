package com.developers.bountyhunter.service.base;

import com.developers.bountyhunter.model.base.IdentifiableEntity;
import com.developers.bountyhunter.repository.base.BaseRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Optional;

public class BaseServiceImpl<T extends IdentifiableEntity, ID> implements BaseService<T, ID> {

	@Autowired
	private BaseRepository<T, ID> baseRepository;

	public List<T> findAll() {
		return baseRepository.findAll();
	}

	public Optional<T> findById(ID id) {
		return baseRepository.findById(id);
	}

	public T save(T t) {
		return baseRepository.save(t);
	}

	public void deleteById(ID id) {
		baseRepository.deleteById(id);
	}

}
