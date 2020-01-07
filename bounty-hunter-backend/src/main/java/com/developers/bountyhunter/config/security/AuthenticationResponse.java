package com.developers.bountyhunter.config.security;

import com.developers.bountyhunter.model.person.UserAccount;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class AuthenticationResponse {

    private final String jwt;
}
