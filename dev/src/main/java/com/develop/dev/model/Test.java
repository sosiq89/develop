package com.develop.dev.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Getter
@Setter
@Entity(name="Test")
public class Test {
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private long testId;
}
