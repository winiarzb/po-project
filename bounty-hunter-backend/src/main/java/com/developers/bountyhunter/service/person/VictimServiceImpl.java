package com.developers.bountyhunter.service.person;

import com.developers.bountyhunter.model.person.Victim;
import com.developers.bountyhunter.repository.person.VictimRepository;
import com.developers.bountyhunter.service.base.BaseServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class VictimServiceImpl extends BaseServiceImpl<Victim, Long> implements VictimService{

	private final VictimRepository victimRepository;

}
