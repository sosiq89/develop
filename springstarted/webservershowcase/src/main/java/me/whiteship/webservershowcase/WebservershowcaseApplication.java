package me.whiteship.webservershowcase;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.WebApplicationType;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@EnableConfigurationProperties(GukProperties.class)
// 생성한 properties class를 사용할 수 있게 명시
public class WebservershowcaseApplication {


  public static void main(String[] args) {
    //SpringApplication.run(WebservershowcaseApplication.class, args);
    SpringApplication app = new SpringApplication(WebservershowcaseApplication.class);
    app.setWebApplicationType(WebApplicationType.NONE);
    app.run(args);
  }
}
