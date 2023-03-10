package me.whiteship.springbootmongodb.account;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.data.mongo.DataMongoTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Optional;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@RunWith(SpringRunner.class)
@DataMongoTest
public class AccountRepositoryTest {
  @Autowired
  AccountRepository accountRepository;

  @Test
  public void findByEmail(){
    Account account = new Account();
    account.setUsername("keesun");
    account.setMail("keesun@mail.com");

    accountRepository.save(account);

    Optional<Account> byId = accountRepository.findById(account.getId());
    assertThat(byId).isNotEmpty();

    //Optional<Account> byEmail = accountRepository.findByMail(account.getMail());
    //åassertThat(byEmail).isNotEmpty();
  }
}
