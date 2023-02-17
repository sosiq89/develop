package me.whiteship.spring;

import com.example.autoconfigure.Holoman;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Component;

@Component
@ComponentScan(basePackages = {"com.example.autoconfigure"})
public class HolomanRunner implements ApplicationRunner {
  @Autowired(required = true)
  Holoman holoman;
  @Override
  public void run(ApplicationArguments args) throws Exception {
    System.out.println(holoman);
  }
}
