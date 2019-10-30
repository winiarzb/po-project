package com.developers.bountyhunter.resource.person;

import com.developers.bountyhunter.dto.person.VictimDTO;
import com.developers.bountyhunter.mapper.person.VictimMapper;
import com.developers.bountyhunter.model.person.Victim;
import com.developers.bountyhunter.service.person.VictimService;
import lombok.RequiredArgsConstructor;
import org.mapstruct.factory.Mappers;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/victim")
@RequiredArgsConstructor
public class VictimResource {

	private final VictimService victimService;

	private VictimMapper victimMapper = Mappers.getMapper(VictimMapper.class);

	@GetMapping("/{id}")
	private ResponseEntity<VictimDTO> getById(@PathVariable("id") Long id) {

		Optional<Victim> victim = victimService.findById(id);

		return victim.map(value -> new ResponseEntity<>(victimMapper.victimToVictimDTO(value), HttpStatus.OK)).
				orElseGet(() -> new ResponseEntity<>(null, HttpStatus.NOT_FOUND));

	}

	@GetMapping("/all")
	private ResponseEntity<List<VictimDTO>> getAll() {

		List<VictimDTO> victimDTOS = victimMapper.victimsToVictimsDTO(victimService.findAll());
		return new ResponseEntity<>(victimDTOS, HttpStatus.OK);

	}

	@PostMapping()
	private ResponseEntity<VictimDTO> createVictim(@Valid @RequestBody VictimDTO victimDTO, BindingResult bindingResult) {

		if (bindingResult.hasErrors()) {
			return new ResponseEntity<>(victimDTO, HttpStatus.BAD_REQUEST);
		}

		Victim victim = victimMapper.victimDTOtoVictim(victimDTO);
		victim = victimService.save(victim);
		victimDTO = victimMapper.victimToVictimDTO(victim);

		return new ResponseEntity<>(victimDTO, HttpStatus.CREATED);
	}

	@PutMapping()
	private ResponseEntity<VictimDTO> updateVictim(@Valid @RequestBody VictimDTO victimDTO, BindingResult bindingResult) {

		if (bindingResult.hasErrors()) {
			return new ResponseEntity<>(victimDTO, HttpStatus.BAD_REQUEST);
		}

		Optional<Victim> victim = victimService.findById(victimDTO.getId());

		if (victim.isPresent()) {
			victimService.save(victimMapper.victimDTOtoVictim(victimDTO));
			return new ResponseEntity<>(victimDTO, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(victimDTO, HttpStatus.NOT_FOUND);
		}
	}

	@DeleteMapping("/{id}")
	private ResponseEntity<VictimDTO> deleteVictim(@PathVariable Long id) {

		Optional<Victim> victim = victimService.findById(id);

		if (victim.isPresent()) {
			victimService.deleteById(id);
			return new ResponseEntity<>(null, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);

		}
	}

}
