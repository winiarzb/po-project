package com.developers.bountyhunter.resource.person;

import com.developers.bountyhunter.dto.person.UserAccountDTO;
import com.developers.bountyhunter.dto.person.UserAccountFormDTO;
import com.developers.bountyhunter.mapper.person.UserAccountMapper;
import com.developers.bountyhunter.model.person.UserAccount;
import com.developers.bountyhunter.service.person.UserAccountService;
import lombok.RequiredArgsConstructor;
import org.mapstruct.factory.Mappers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
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
@RequestMapping("/user")
@RequiredArgsConstructor
public class UserAccountResource {

	private final UserAccountService userAccountService;

	private UserAccountMapper userAccountMapper = Mappers.getMapper(UserAccountMapper.class);

	@GetMapping("/{id}")
	private ResponseEntity<UserAccountDTO> getById(@PathVariable("id") Long id) {

		Optional<UserAccount> userAccount = userAccountService.findById(id);

		return userAccount.map(value -> new ResponseEntity<>(userAccountMapper.userAccountToUserAccountDTO(value), HttpStatus.OK)).
				orElseGet(() -> new ResponseEntity<>(null, HttpStatus.NOT_FOUND));

	}

	@GetMapping("/all")
	private ResponseEntity<List<UserAccountDTO>> getAll() {

		List<UserAccountDTO> userAccountDTOS = userAccountMapper.userAccountsToUserAccountsDTO(userAccountService.findAll());
		return new ResponseEntity<>(userAccountDTOS, HttpStatus.OK);

	}

	@PostMapping()
	private ResponseEntity<UserAccountDTO> createUserAccount(@Valid @RequestBody UserAccountFormDTO userAccountFormDTO, BindingResult bindingResult) {

		if (bindingResult.hasErrors()) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}

		UserAccount userAccount = userAccountMapper.userAccountFormDTOtoUserAccount(userAccountFormDTO);
		userAccount = userAccountService.save(userAccount);
		UserAccountDTO userAccountDTO = userAccountMapper.userAccountToUserAccountDTO(userAccount);

		return new ResponseEntity<>(userAccountDTO, HttpStatus.CREATED);
	}

	@PutMapping()
	private ResponseEntity<UserAccountDTO> updateUserAccount(@Valid @RequestBody UserAccountDTO userAccountDTO, BindingResult bindingResult) {

		if (bindingResult.hasErrors()) {
			return new ResponseEntity<>(userAccountDTO, HttpStatus.BAD_REQUEST);
		}

		Optional<UserAccount> userAccount = userAccountService.findById(userAccountDTO.getId());

		if (userAccount.isPresent()) {
			userAccountService.save(userAccountMapper.userAccountDTOtoUserAccount(userAccountDTO));
			return new ResponseEntity<>(userAccountDTO, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(userAccountDTO, HttpStatus.NOT_FOUND);
		}
	}

	@DeleteMapping("/{id}")
	private ResponseEntity<UserAccountDTO> deleteUserAccount(@PathVariable Long id) {

		Optional<UserAccount> userAccount = userAccountService.findById(id);

		if (userAccount.isPresent()) {
			userAccountService.deleteById(id);
			return new ResponseEntity<>(null, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);

		}
	}

}
