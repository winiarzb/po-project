package com.developers.bountyhunter.resource.auth;

import com.developers.bountyhunter.config.security.ApiResponse;
import com.developers.bountyhunter.config.security.AuthenticationResponse;
import com.developers.bountyhunter.config.security.JwtProvider;
import com.developers.bountyhunter.config.security.SignInRequest;
import com.developers.bountyhunter.dto.person.auth.UserRegisterFormDTO;
import com.developers.bountyhunter.exception.AppException;
import com.developers.bountyhunter.model.person.UserAccount;
import com.developers.bountyhunter.model.person.role.Role;
import com.developers.bountyhunter.model.world.District;
import com.developers.bountyhunter.model.world.Galaxy;
import com.developers.bountyhunter.model.world.Planet;
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
import java.util.ArrayList;
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
    public ResponseEntity<?> registerUser(@Valid @RequestBody UserRegisterFormDTO userRegisterFormDTO) {
//            to test without json
//        if (userRegisterFormDTO.getUsername() == null) {
//            TestUser testUser = new TestUser();
//            userRegisterFormDTO = testUser.createTestUser();
//        }

        if (checkUsernameExists(userRegisterFormDTO))
            return new ResponseEntity<>(new ApiResponse(false, "Username is exists"), HttpStatus.BAD_REQUEST);

        UserAccount newUser = createNewUserInstance(userRegisterFormDTO);

        checkAndSetRole(userRegisterFormDTO, newUser);

        checkAndSetGalaxy(userRegisterFormDTO, newUser);

        checkAndSetPlanets(userRegisterFormDTO, newUser);

        checkAndSetDistricts(userRegisterFormDTO, newUser);

        UserAccount savedUser = userAccountService.save(newUser);
        URI location = ServletUriComponentsBuilder
                .fromCurrentContextPath().path("/user/{id}")
                .buildAndExpand(savedUser.getId()).toUri();
        return ResponseEntity.created(location).body(new ApiResponse(true, "User registered successfull"));
    }

    private UserAccount createNewUserInstance(@RequestBody @Valid UserRegisterFormDTO userRegisterFormDTO) {
        UserAccount newUser = new UserAccount();
        setBasicData(userRegisterFormDTO, newUser);
        return newUser;
    }

    private void setBasicData(@RequestBody @Valid UserRegisterFormDTO userRegisterFormDTO, UserAccount newUser) {
        newUser.setUsername(userRegisterFormDTO.getUsername());
        newUser.setPassword(passwordEncoder.encode(userRegisterFormDTO.getPassword()));
        newUser.setRegisteredDate(new Date());
        newUser.setEnabled(true);
    }

    private boolean checkUsernameExists(@RequestBody @Valid UserRegisterFormDTO userRegisterFormDTO) {
        if (userAccountService.existsByUsername(userRegisterFormDTO.getUsername())) {
            return true;
        }
        return false;
    }

    private void checkAndSetRole(@RequestBody @Valid UserRegisterFormDTO userRegisterFormDTO, UserAccount newUser) {
        if (userRegisterFormDTO.getRole().getRoleName() != null) {
            Role role = roleService.findRoleByName(userRegisterFormDTO.getRole().getRoleName())
                    .orElseThrow(() -> new AppException("User role not exists"));
            newUser.setRole(role);
        }
    }

    private void checkAndSetDistricts(@RequestBody @Valid UserRegisterFormDTO userRegisterFormDTO, UserAccount newUser) {
        if (!userRegisterFormDTO.getDistricts().isEmpty()) {
            newUser.setDistricts(new ArrayList<>());
            userRegisterFormDTO.getDistricts().forEach(districtDTO -> {
                District district = districtService.findByDistrictName(districtDTO.getName())
                        .orElseThrow(() -> new AppException("District not exists"));
                newUser.getDistricts().add(district);
            });
        }
    }

    private void checkAndSetPlanets(@RequestBody @Valid UserRegisterFormDTO userRegisterFormDTO, UserAccount newUser) {
        newUser.setPlanets(new ArrayList<>());
        if (!userRegisterFormDTO.getPlanets().isEmpty()) {
            userRegisterFormDTO.getPlanets().forEach(planetDTO -> {
                Planet planet = planetService.findPlanetByPlanetName(planetDTO.getName())
                        .orElseThrow(() -> new AppException("Planet not exists"));
                newUser.getPlanets().add(planet);
            });
        }
    }

    private void checkAndSetGalaxy(@RequestBody @Valid UserRegisterFormDTO userRegisterFormDTO, UserAccount newUser) {
        if (userRegisterFormDTO.getGalaxy().getName() != null) {
            Galaxy galaxy = galaxyService.findGalaxyByGalaxyName(userRegisterFormDTO.getGalaxy().getName())
                    .orElseThrow(() -> new AppException("Galaxy not exists"));
            newUser.setGalaxy(galaxy);
        }
    }
}

