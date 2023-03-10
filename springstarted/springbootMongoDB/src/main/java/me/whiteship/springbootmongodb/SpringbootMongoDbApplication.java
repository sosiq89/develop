package me.whiteship.springbootmongodb;

import me.whiteship.springbootmongodb.account.Account;
import me.whiteship.springbootmongodb.account.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.mongodb.core.MongoTemplate;

@SpringBootApplication
public class SpringbootMongoDbApplication {

  public static void main(String[] args) {
    SpringApplication.run(SpringbootMongoDbApplication.class, args);
  }

  @Autowired
  MongoTemplate mongoTemplate;
  @Autowired
  AccountRepository accountRepository;
  @Bean
  public ApplicationRunner applicationRunner(){
    return args -> {
      Account account = new Account();
      account.setMail("aaa@bbb");
      account.setUsername("aaa");

      //accountRepository.insert(account);
      mongoTemplate.insert(account);

      System.out.println("finished");

    };
  }
}
