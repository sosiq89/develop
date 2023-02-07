package com.develop.dev.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Getter
@Setter
@Entity(name="company")
public class CompanyVO {
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private long companyId;
  private String name;
  private String cate;
  private String manager;
  private String location;

}
