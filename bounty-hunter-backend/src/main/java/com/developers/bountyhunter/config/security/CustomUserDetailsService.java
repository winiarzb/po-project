package com.developers.bountyhunter.config.security;

import com.developers.bountyhunter.model.person.UserAccount;
import com.developers.bountyhunter.repository.person.UserAccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private UserAccountRepository userAccountRepository;

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserAccount userAccount = userAccountRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found with username " + username));
        return UserPrincipal.create(userAccount);
    }

    @Transactional
    public UserDetails loadUserById(Long id) {
        UserAccount userAccount = userAccountRepository.findById(id).orElseThrow(
                () -> new UsernameNotFoundException("User not found with id : " + id));
        return UserPrincipal.create(userAccount);
    }
}
