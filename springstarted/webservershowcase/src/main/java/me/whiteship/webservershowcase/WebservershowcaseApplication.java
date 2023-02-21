package me.whiteship.webservershowcase;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class WebservershowcaseApplication {
  public static void main(String[] args) {
    SpringApplication app = new SpringApplication(SpringApplication.class);
    //app.addListeners(new SampleListener());
    app.run(args);
  }


}
