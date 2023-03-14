package application.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class WebSecurityConfigure {
  @Bean
  public SecurityFilterChain filterChain(HttpSecurity http) throws Exception{
    http
      .authorizeHttpRequests()
        .requestMatchers("/", "/hello").permitAll()
        .anyRequest().authenticated()
        .and()
      .formLogin()
        .and()
      .httpBasic();

    return http.build();
  }

  @Bean
  public PasswordEncoder passwordEncoder(){
    return PasswordEncoderFactories.createDelegatingPasswordEncoder();
  }

}
