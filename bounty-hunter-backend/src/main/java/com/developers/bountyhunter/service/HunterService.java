package com.developers.bountyhunter.service;

import com.developers.bountyhunter.model.Hunter;
import com.developers.bountyhunter.repository.HunterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HunterService {

    @Autowired
    private HunterRepository hunterRepository;

    public List<Hunter> retriveAllHunters() {
        return hunterRepository.findAll();
    }
}
