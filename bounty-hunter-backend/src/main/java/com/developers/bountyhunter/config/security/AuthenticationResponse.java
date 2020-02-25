package com.developers.bountyhunter.config.security;
import com.developers.bountyhunter.dto.person.UserAccountDTO;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.Optional;

@Getter
@AllArgsConstructor
public class AuthenticationResponse {

    private final String jwt;
    private final Optional<UserAccountDTO> user;

}
