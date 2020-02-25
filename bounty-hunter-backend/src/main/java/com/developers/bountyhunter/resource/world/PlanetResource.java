package com.developers.bountyhunter.resource.world;

import com.developers.bountyhunter.dto.world.PlanetDTO;
import com.developers.bountyhunter.dto.world.PlanetFormDTO;
import com.developers.bountyhunter.exception.AppException;
import com.developers.bountyhunter.mapper.world.PlanetMapper;
import com.developers.bountyhunter.model.world.District;
import com.developers.bountyhunter.model.world.Galaxy;
import com.developers.bountyhunter.model.world.Planet;
import com.developers.bountyhunter.service.world.DistrictService;
import com.developers.bountyhunter.service.world.GalaxyService;
import com.developers.bountyhunter.service.world.PlanetService;
import com.fasterxml.jackson.databind.ser.FilterProvider;
import com.fasterxml.jackson.databind.ser.impl.SimpleBeanPropertyFilter;
import com.fasterxml.jackson.databind.ser.impl.SimpleFilterProvider;
import lombok.RequiredArgsConstructor;
import org.mapstruct.factory.Mappers;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.json.MappingJacksonValue;
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
@RequestMapping("/planet")
@RequiredArgsConstructor
public class PlanetResource {

    private final PlanetService planetService;
    private final GalaxyService galaxyService;
    private final DistrictService districtService;

    private PlanetMapper planetMapper = Mappers.getMapper(PlanetMapper.class);

    @GetMapping("/{id}")
    private ResponseEntity<PlanetDTO> getById(@PathVariable("id") Long id) {

        Optional<Planet> planet = planetService.findById(id);

        return planet.map(value -> new ResponseEntity<>(planetMapper.planetToPlanetDTO(value), HttpStatus.OK)).
                orElseGet(() -> new ResponseEntity<>(null, HttpStatus.NOT_FOUND));

    }

    @GetMapping("/all")
    private ResponseEntity<List<PlanetDTO>> getAll() {

        List<PlanetDTO> planetDTOS = planetMapper.planetsToPlanetsDTO(planetService.findAll());
        return new ResponseEntity<>(planetDTOS, HttpStatus.OK);

    }

    @GetMapping("/galaxy/{id}")
    private ResponseEntity<List<PlanetDTO>> findPlanetsByGalaxyId(@PathVariable("id") Long id) {

        Galaxy galaxy = galaxyService.findById(id)
                .orElseThrow(() -> new AppException("Galaxy not exists"));
        List<Planet> planets = planetService.findPlanetsByGalaxy(galaxy);
        List<PlanetDTO> planetDTOS = planetMapper.planetsToPlanetsDTO(planets);
        return new ResponseEntity<>(planetDTOS, HttpStatus.OK);
    }

    @PostMapping()
    private ResponseEntity<PlanetDTO> createPlanet(@Valid @RequestBody PlanetFormDTO planetFormDTO, BindingResult bindingResult) {

        if (bindingResult.hasErrors()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        Planet planet = planetMapper.planetFormDTOToPlanet(planetFormDTO);

        Optional<Galaxy> galaxy = galaxyService.findById(planetFormDTO.getGalaxyId());

        if (galaxy.isPresent()) {
            planet.setGalaxy(galaxy.get());
        } else {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        List<District> districts = new ArrayList<>();

        planetFormDTO.getDistrictsIds().forEach((id) -> districtService.findById(id).ifPresent(districts::add));

        planet.setDistricts(districts);
        planet = planetService.save(planet);
        PlanetDTO planetDTO = planetMapper.planetToPlanetDTO(planet);

        return new ResponseEntity<>(planetDTO, HttpStatus.CREATED);
    }

    @PutMapping()
    private ResponseEntity<PlanetDTO> updatePlanet(@Valid @RequestBody PlanetDTO planetDTO, BindingResult bindingResult) {

        if (bindingResult.hasErrors()) {
            return new ResponseEntity<>(planetDTO, HttpStatus.BAD_REQUEST);
        }

        Optional<Planet> planet = planetService.findById(planetDTO.getId());

        if (planet.isPresent()) {
            planetService.save(planetMapper.planetDTOtoPlanet(planetDTO));
            return new ResponseEntity<>(planetDTO, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(planetDTO, HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    private ResponseEntity<PlanetDTO> deletePlanet(@PathVariable Long id) {

        Optional<Planet> planet = planetService.findById(id);

        if (planet.isPresent()) {
            planetService.deleteById(id);
            return new ResponseEntity<>(null, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);

        }
    }

}
