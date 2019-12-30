package com.developers.bountyhunter.resource.auth;

import com.developers.bountyhunter.config.security.ApiResponse;
import com.developers.bountyhunter.config.security.AuthenticationResponse;
import com.developers.bountyhunter.config.security.JwtProvider;
import com.developers.bountyhunter.config.security.SignInRequest;
import com.developers.bountyhunter.dto.person.auth.UserRegisterDTO;
import com.developers.bountyhunter.exception.AppException;
import com.developers.bountyhunter.model.person.role.Role;
import com.developers.bountyhunter.model.person.UserAccount;
import com.developers.bountyhunter.model.world.Galaxy;
import com.developers.bountyhunter.service.person.UserAccountService;
import com.developers.bountyhunter.service.person.role.RoleService;
import com.developers.bountyhunter.service.world.DistrictService;
import com.developers.bountyhunter.service.world.GalaxyService;
import com.developers.bountyhunter.service.world.PlanetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;
import java.net.URI;
import java.util.Date;

@RestController
@RequestMapping("/auth")
public class AuthenticationResource {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserAccountService userAccountService;

    @Autowired
    private RoleService roleService;

    @Autowired
    private GalaxyService galaxyService;

    @Autowired
    private PlanetService planetService;

    @Autowired
    private DistrictService districtService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtProvider jwtProvider;

    @PostMapping("/signin")
    public ResponseEntity<?> authUser(@Valid @RequestBody SignInRequest request) throws Exception {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getUsername(),
                        request.getPassword()
                )
        );
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtProvider.generateToken(authentication);
        return ResponseEntity.ok(new AuthenticationResponse(jwt));
    }

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@Valid @RequestBody UserRegisterDTO userRegisterDTO) {
        if (userAccountService.existsByUsername(userRegisterDTO.getUsername())) {
            return new ResponseEntity<>(new ApiResponse(false, "Username is exists"), HttpStatus.BAD_REQUEST);
        }

        UserAccount newUser = new UserAccount();
        newUser.setUsername(userRegisterDTO.getUsername());
        newUser.setPassword(passwordEncoder.encode(userRegisterDTO.getPassword()));
        newUser.setRegisteredDate(new Date());
        newUser.setEnabled(true);

        Role role = roleService.findRoleByName(userRegisterDTO.getRole().getUserRole())
                .orElseThrow(() -> new AppException("User role not exists"));
        newUser.setRole(role);

        Galaxy galaxy = galaxyService.findGalaxyByGalaxyName(userRegisterDTO.getGalaxy().getGalaxyName())
                .orElseThrow(() -> new AppException("Galaxy not exists"));


        UserAccount savedUser = userAccountService.save(newUser);
        URI location = ServletUriComponentsBuilder
                .fromCurrentContextPath().path("/user/{id}")
                .buildAndExpand(savedUser.getId()).toUri();
        return ResponseEntity.created(location).body(new ApiResponse(true, "User registered successfull"));
    }
}

