package com.developers.bountyhunter.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Data
public class Hunter {
    @Id
    private Long id;        // Badge
    private String name;    // Forename
}
