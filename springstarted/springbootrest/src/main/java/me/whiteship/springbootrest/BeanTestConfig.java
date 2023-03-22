package me.whiteship.springbootrest;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class BeanTestConfig {
  @Bean
  public SampleController sampleController(){
    return new SampleController();
  }
}
