package com.developers.bountyhunter.repository.base;

import com.developers.bountyhunter.model.base.IdentifiableEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BaseRepository<T extends IdentifiableEntity, ID> extends JpaRepository<T, ID> {

}
