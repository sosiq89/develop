package com.whiteship.spring1.sample;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.junit.runner.RunWith;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.test.context.junit4.SpringRunner;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class SampleControllerTest {
  @Autowired
  TestRestTemplate testRestTemplate;

  @Test
  public void hello() throws Exception{
    String result = testRestTemplate.getForObject("/hello", String.class);
    assertThat(result).isEqualTo("hello guk");
  }
}
