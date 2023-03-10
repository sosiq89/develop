package me.whiteship.springbootjdbc;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.SQLOutput;
import java.sql.Statement;

@Component
public class H2Runner implements ApplicationRunner {
  @Autowired
  DataSource dataSource;

  @Override
  public void run(ApplicationArguments args) throws Exception {
    try(Connection connection = dataSource.getConnection()){
      System.out.println( connection.getMetaData().getURL());
      System.out.println(connection.getMetaData().getUserName()) ;

      Statement statement = connection.createStatement();
      String sql = "CREATE TABLE USERS(id integer not null, name varchar(255), primary key (id))";
      statement.executeUpdate(sql);
    }
  }
}
