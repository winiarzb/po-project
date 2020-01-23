package com.developers.bountyhunter;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class BountyHunterApplication {

    public static void main(String[] args) {
        SpringApplication.run(BountyHunterApplication.class, args);
    }

}
