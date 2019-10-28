package com.developers.bountyhunter.controller;


import com.developers.bountyhunter.model.Hunter;
import com.developers.bountyhunter.service.HunterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/hunters")
public class HunterController {

    @Autowired
    private HunterService hunterService;

    @GetMapping
    public List<Hunter> retriveAllHunters() {
        return hunterService.retriveAllHunters();
    }
}
