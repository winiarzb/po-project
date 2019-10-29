package com.developers.bountyhunter.resource;

import com.developers.bountyhunter.dto.dictionary.DictDTO;
import com.developers.bountyhunter.mapper.dictionary.DictionaryMapper;
import com.developers.bountyhunter.model.dictionary.Dict;
import com.developers.bountyhunter.model.dictionary.DictType;
import com.developers.bountyhunter.service.DictService;
import org.mapstruct.factory.Mappers;
import org.springframework.beans.factory.annotation.Autowired;
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
@RequestMapping("/dict")
public class DictResource {

	@Autowired
	private DictService dictService;

	private DictionaryMapper dictionaryMapper = Mappers.getMapper(DictionaryMapper.class);

	@GetMapping("/{id}")
	private ResponseEntity<DictDTO> getById(@PathVariable("id") Long id) {

		Optional<Dict> dict = dictService.findById(id);

		return dict.map(value -> new ResponseEntity<>(dictionaryMapper.dictToDictDTO(value), HttpStatus.OK)).
				orElseGet(() -> new ResponseEntity<>(null, HttpStatus.NOT_FOUND));

	}

	@GetMapping("/all")
	private ResponseEntity<List<DictDTO>> getAll() {

		List<DictDTO> dictDTOS = dictionaryMapper.dictsToDictsDTO(dictService.findAll());
		return new ResponseEntity<>(dictDTOS, HttpStatus.OK);

	}

	@GetMapping("/all/{type}")
	private ResponseEntity<List<DictDTO>> getAllByType(@PathVariable("type") DictType type) {

		List<DictDTO> dictDTOS = dictionaryMapper.dictsToDictsDTO(dictService.findAllByType(type));
		return new ResponseEntity<>(dictDTOS, HttpStatus.OK);

	}

	@PostMapping()
	private ResponseEntity<DictDTO> createDict(@Valid @RequestBody DictDTO dictDTO, BindingResult bindingResult) {

		if (bindingResult.hasErrors()) {
			return new ResponseEntity<>(dictDTO, HttpStatus.BAD_REQUEST);
		}

		Dict dict = dictionaryMapper.dictDTOtoDict(dictDTO);
		dict = dictService.save(dict);
		dictDTO = dictionaryMapper.dictToDictDTO(dict);

		return new ResponseEntity<>(dictDTO, HttpStatus.CREATED);
	}

	@PutMapping()
	private ResponseEntity<DictDTO> updateDict(@Valid @RequestBody DictDTO dictDTO, BindingResult bindingResult) {

		if (bindingResult.hasErrors()) {
			return new ResponseEntity<>(dictDTO, HttpStatus.BAD_REQUEST);
		}

		Optional<Dict> dict = dictService.findById(dictDTO.getId());

		if (dict.isPresent()) {
			dictService.save(dictionaryMapper.dictDTOtoDict(dictDTO));
			return new ResponseEntity<>(dictDTO, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(dictDTO, HttpStatus.NOT_FOUND);
		}
	}

	@DeleteMapping("/{id}")
	private ResponseEntity<DictDTO> deleteDict(@PathVariable Long id) {

		Optional<Dict> dict = dictService.findById(id);

		if (dict.isPresent()) {
			dictService.deleteById(id);
			return new ResponseEntity<>(null, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);

		}
	}

}
