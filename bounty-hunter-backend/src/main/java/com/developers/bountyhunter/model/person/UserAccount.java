package com.developers.bountyhunter.model.person;

import com.developers.bountyhunter.model.person.role.Role;
import com.developers.bountyhunter.model.world.District;
import com.developers.bountyhunter.model.world.Galaxy;
import com.developers.bountyhunter.model.world.Planet;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Data
@PrimaryKeyJoinColumn(name = "person_id")
public class UserAccount extends Person {

    private String username;
    private String password;
    private Date registeredDate;
    private boolean enabled;

    @OneToOne()
    @JoinColumn(name = "role_id")
    private Role role;

    @ToString.Exclude
    @EqualsAndHashCode.Exclude
    @ManyToOne()
    @JoinColumn(name = "galaxy_id", referencedColumnName = "id")
    private Galaxy galaxy;

    @ToString.Exclude
    @EqualsAndHashCode.Exclude
    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(
            name = "user_planet",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "planet_id"))
    private List<Planet> planets;

    @ToString.Exclude
    @EqualsAndHashCode.Exclude
    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(
            name = "user_district",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "district_id"))
    private List<District> districts;
}
