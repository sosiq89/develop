package me.whiteship.webservershowcase;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class SampleListener implements ApplicationRunner {

  private Logger logger = LoggerFactory.getLogger(SampleListener.class);
  @Autowired
  private String hello;
  @Autowired
  private GukProperties gukProperties;
  @Override
  public void run(ApplicationArguments args) throws Exception {
    logger.info("=================");
    logger.info(hello);
    logger.info(gukProperties.getName());
    logger.info("=================");
  }
}










