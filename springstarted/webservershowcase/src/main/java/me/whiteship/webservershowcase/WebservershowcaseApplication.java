package me.whiteship.webservershowcase;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.WebApplicationType;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class WebservershowcaseApplication {
  public static void main(String[] args) {
    //SpringApplication.run(WebservershowcaseApplication.class, args);
    SpringApplication app = new SpringApplication(WebservershowcaseApplication.class);
    app.setWebApplicationType(WebApplicationType.NONE);
    app.run(args);
  }
}
