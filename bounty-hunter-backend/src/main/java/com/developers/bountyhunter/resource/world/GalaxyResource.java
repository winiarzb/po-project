package com.developers.bountyhunter.resource.world;

import com.developers.bountyhunter.dto.world.GalaxyDTO;
import com.developers.bountyhunter.dto.world.GalaxyFormDTO;
import com.developers.bountyhunter.mapper.world.GalaxyMapper;
import com.developers.bountyhunter.model.world.Galaxy;
import com.developers.bountyhunter.model.world.Planet;
import com.developers.bountyhunter.service.world.GalaxyService;
import com.developers.bountyhunter.service.world.PlanetService;
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
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/galaxy")
@RequiredArgsConstructor
public class GalaxyResource {

	private final GalaxyService galaxyService;
	private final PlanetService planetService;

	private GalaxyMapper galaxyMapper = Mappers.getMapper(GalaxyMapper.class);

	@GetMapping("/{id}")
	private ResponseEntity<GalaxyDTO> getById(@PathVariable("id") Long id) {

		Optional<Galaxy> galaxy = galaxyService.findById(id);

		return galaxy.map(value -> new ResponseEntity<>(galaxyMapper.galaxyToGalaxyDTO(value), HttpStatus.OK)).
				orElseGet(() -> new ResponseEntity<>(null, HttpStatus.NOT_FOUND));

	}

	@GetMapping("/all")
	private ResponseEntity<List<GalaxyDTO>> getAll() {

		List<GalaxyDTO> galaxyDTOS = galaxyMapper.galaxiesToGalaxiesDTO(galaxyService.findAll());
		return new ResponseEntity<>(galaxyDTOS, HttpStatus.OK);

	}

	@PostMapping()
	private ResponseEntity<GalaxyDTO> createGalaxy(@Valid @RequestBody GalaxyFormDTO galaxyFormDTO, BindingResult bindingResult) {

		if (bindingResult.hasErrors()) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}

		List<Planet> planets = new ArrayList<>();

		Galaxy galaxy = galaxyMapper.galaxyFormDTOtoGalaxy(galaxyFormDTO);

		galaxyFormDTO.getPlanetsId().forEach((id) -> planetService.findById(id).ifPresent(planets::add));
		galaxy.setPlanets(planets);
		galaxy = galaxyService.save(galaxy);

		GalaxyDTO galaxyDTO = galaxyMapper.galaxyToGalaxyDTO(galaxy);

		return new ResponseEntity<>(galaxyDTO, HttpStatus.CREATED);
	}

	@PutMapping()
	private ResponseEntity<GalaxyDTO> updateGalaxy(@Valid @RequestBody GalaxyDTO galaxyDTO, BindingResult bindingResult) {

		if (bindingResult.hasErrors()) {
			return new ResponseEntity<>(galaxyDTO, HttpStatus.BAD_REQUEST);
		}

		Optional<Galaxy> galaxy = galaxyService.findById(galaxyDTO.getId());

		if (galaxy.isPresent()) {
			galaxyService.save(galaxyMapper.galaxyDTOtoGalaxy(galaxyDTO));
			return new ResponseEntity<>(galaxyDTO, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(galaxyDTO, HttpStatus.NOT_FOUND);
		}
	}

	@DeleteMapping("/{id}")
	private ResponseEntity<GalaxyDTO> deleteGalaxy(@PathVariable Long id) {

		Optional<Galaxy> galaxy = galaxyService.findById(id);

		if (galaxy.isPresent()) {
			galaxyService.deleteById(id);
			return new ResponseEntity<>(null, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);

		}
	}

}
