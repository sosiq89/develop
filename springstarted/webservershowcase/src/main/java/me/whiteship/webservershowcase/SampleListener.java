package me.whiteship.webservershowcase;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.context.event.ApplicationStartedEvent;
import org.springframework.context.ApplicationListener;
import org.springframework.stereotype.Component;

@Component
public class SampleListener implements ApplicationRunner {
  @Autowired
  GukProperties gukProperties;
  @Override
  public void run(ApplicationArguments args) throws Exception {
    System.out.println("==============");
    System.out.println(gukProperties.getName());
    System.out.println("==============");
  }
}










