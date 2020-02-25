package com.developers.bountyhunter.config.security;

public class SecurityConstants {
    public static final String SECRET_KEY ="bounty";
    public static final long EXPIRATION_IN_MS =1800000; // 30 min
    public static final String TOKEN_PREFIX ="Bearer ";
    public static final String HEADER_STRING ="Authorization";
}
