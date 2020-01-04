package com.developers.bountyhunter.resource.auth;

import com.developers.bountyhunter.dto.person.auth.UserRegisterFormDTO;
import com.developers.bountyhunter.dto.person.role.RoleDTO;
import com.developers.bountyhunter.dto.world.DistrictDTO;
import com.developers.bountyhunter.dto.world.GalaxyDTO;
import com.developers.bountyhunter.dto.world.PlanetDTO;
import com.developers.bountyhunter.model.person.role.UserRole;
import com.developers.bountyhunter.model.world.PlanetType;

public class TestUser {

    protected UserRegisterFormDTO createTestUser() {
        UserRegisterFormDTO userRegisterFormDTO = new UserRegisterFormDTO();
        userRegisterFormDTO.setUsername("test");
        userRegisterFormDTO.setPassword("test");

        RoleDTO roleDTO = new RoleDTO();
        roleDTO.setUserRole(UserRole.HUNTER);
        userRegisterFormDTO.setRole(roleDTO);

        DistrictDTO federalDistrict = createDistrict("Federal District");
        DistrictDTO coTown = createDistrict("CoCo Town");
        DistrictDTO senatePlaza = createDistrict("Senate Plaza");

        PlanetDTO tatooine = createPlanet("Tatooine", PlanetType.ICY);
        PlanetDTO alderan = createPlanet("Alderan", PlanetType.OCEAN);

        GalaxyDTO galaxy = createGalaxy("Galaxy Far, Far Away");

        userRegisterFormDTO.getDistricts().add(federalDistrict);
        userRegisterFormDTO.getDistricts().add(coTown);
        userRegisterFormDTO.getDistricts().add(senatePlaza);
        userRegisterFormDTO.getPlanets().add(tatooine);
        userRegisterFormDTO.getPlanets().add(alderan);
        userRegisterFormDTO.setGalaxy(galaxy);

        return userRegisterFormDTO;
    }

    private GalaxyDTO createGalaxy(String galaxyName) {
        GalaxyDTO galaxyDTO = new GalaxyDTO();
        galaxyDTO.setGalaxyName(galaxyName);
        return galaxyDTO;
    }

    private PlanetDTO createPlanet(String planetName, PlanetType planetType) {
        PlanetDTO planetDTO = new PlanetDTO();
        planetDTO.setName(planetName);
        planetDTO.setPlanetType(planetType);
        return planetDTO;
    }

    private DistrictDTO createDistrict(String districtName) {
        DistrictDTO districtDTO = new DistrictDTO();
        districtDTO.setDistrictName(districtName);
        return districtDTO;
    }
}
