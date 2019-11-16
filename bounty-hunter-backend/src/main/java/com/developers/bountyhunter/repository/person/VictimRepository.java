package com.developers.bountyhunter.repository.person;

import com.developers.bountyhunter.model.person.Victim;
import com.developers.bountyhunter.repository.base.BaseRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VictimRepository extends BaseRepository<Victim, Long> {
}
