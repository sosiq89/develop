package me.whiteship.demospring51;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BookService {
  BookRepository bookRepository;
  @Autowired
  public BookService(BookRepository bookRepository){
    this.bookRepository = bookRepository;
  }
}
