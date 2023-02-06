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
@Entity(name = "material")
public class MaterialVO {
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private String materialCode;
  private String name;
  private String cate;
  private String companyName;
  private String standard;
  private String EA;
}

