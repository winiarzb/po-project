package com.developers.bountyhunter.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloHuntersController {

    @GetMapping("/")
    public String showWelcomeText() {
        return "Welcome in Bounty Hunters";
    }

}
