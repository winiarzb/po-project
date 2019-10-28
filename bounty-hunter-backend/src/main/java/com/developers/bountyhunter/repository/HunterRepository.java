package com.developers.bountyhunter.repository;

import com.developers.bountyhunter.model.Hunter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface HunterRepository extends JpaRepository<Hunter, Long> {

    @Override
    List<Hunter> findAll();
}
