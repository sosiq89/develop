package me.whiteship.springbootrest;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.ApplicationContext;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
class SpringbootrestApplicationTests {

  @Autowired
  ApplicationContext applicationContext;
  @Test
  public void testDI() {
    SampleController bean = applicationContext.getBean(SampleController.class);
  }

}
