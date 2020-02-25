package com.developers.bountyhunter.model.person.role;

import com.developers.bountyhunter.model.base.IdentifiableEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.NaturalId;

import javax.persistence.*;

@Entity
@Table(name = "role")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Role extends IdentifiableEntity {

    @Enumerated(EnumType.STRING)
    @NaturalId
    @Column(length = 35)
    private UserRole roleName;
}
