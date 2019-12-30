package com.developers.bountyhunter.model.person;

import com.developers.bountyhunter.model.person.role.Role;
import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
@PrimaryKeyJoinColumn(name = "person_id")
public class UserAccount extends Person {

    private String username;
    private String password;
    private Date registeredDate;
    private boolean enabled;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "role_id")
    private Role role;
}
