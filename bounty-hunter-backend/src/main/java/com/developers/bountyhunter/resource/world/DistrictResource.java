package com.developers.bountyhunter.resource.world;

import com.developers.bountyhunter.dto.world.DistrictDTO;
import com.developers.bountyhunter.dto.world.DistrictFormDTO;
import com.developers.bountyhunter.mapper.world.DistrictMapper;
import com.developers.bountyhunter.model.world.District;
import com.developers.bountyhunter.model.world.Planet;
import com.developers.bountyhunter.service.world.DistrictService;
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
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/district")
@RequiredArgsConstructor
public class DistrictResource {

	private final DistrictService districtService;
	private final PlanetService planetService;

	private DistrictMapper districtMapper = Mappers.getMapper(DistrictMapper.class);

	@GetMapping("/{id}")
	private ResponseEntity<DistrictDTO> getById(@PathVariable("id") Long id) {

		Optional<District> district = districtService.findById(id);

		return district.map(value -> new ResponseEntity<>(districtMapper.districtToDistrictDTO(value), HttpStatus.OK)).
				orElseGet(() -> new ResponseEntity<>(null, HttpStatus.NOT_FOUND));

	}

	@GetMapping("/all")
	private ResponseEntity<List<DistrictDTO>> getAll() {

		List<DistrictDTO> districtDTOS = districtMapper.districtsToDistrictsDTO(districtService.findAll());
		return new ResponseEntity<>(districtDTOS, HttpStatus.OK);

	}

	@PostMapping()
	private ResponseEntity<DistrictDTO> createDistrict(@Valid @RequestBody DistrictFormDTO districtFormDTO, BindingResult bindingResult) {

		if (bindingResult.hasErrors()) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}

		District district = districtMapper.districtFormDTOtoDistrict(districtFormDTO);

		Optional<Planet> planet = planetService.findById(districtFormDTO.getPlanetId());

		if (planet.isPresent()) {
			district.setPlanet(planet.get());
		} else {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}

		district = districtService.save(district);
		DistrictDTO districtDTO = districtMapper.districtToDistrictDTO(district);

		return new ResponseEntity<>(districtDTO, HttpStatus.CREATED);
	}

	@PutMapping()
	private ResponseEntity<DistrictDTO> updateDistrict(@Valid @RequestBody DistrictDTO districtDTO, BindingResult bindingResult) {

		if (bindingResult.hasErrors()) {
			return new ResponseEntity<>(districtDTO, HttpStatus.BAD_REQUEST);
		}

		Optional<District> district = districtService.findById(districtDTO.getId());

		if (district.isPresent()) {
			districtService.save(districtMapper.districtDTOtoDistrict(districtDTO));
			return new ResponseEntity<>(districtDTO, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(districtDTO, HttpStatus.NOT_FOUND);
		}
	}

	@DeleteMapping("/{id}")
	private ResponseEntity<DistrictDTO> deleteDistrict(@PathVariable Long id) {

		Optional<District> district = districtService.findById(id);

		if (district.isPresent()) {
			districtService.deleteById(id);
			return new ResponseEntity<>(null, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);

		}
	}

}
