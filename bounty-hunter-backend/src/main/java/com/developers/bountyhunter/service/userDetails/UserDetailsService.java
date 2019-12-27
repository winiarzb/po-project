package com.developers.bountyhunter.service.userDetails;

import com.developers.bountyhunter.repository.person.UserAccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class UserDetailsService implements org.springframework.security.core.userdetails.UserDetailsService {

    @Autowired
    private UserAccountRepository userAccountRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        // TODO: 27/12/2019 po testach odkomentowac, póki co na sztywno
//        userAccountRepository.findByUsername(username);
        return new User("test", "test", new ArrayList<>());
    }
}
