package com.develop.dev.model;

import jakarta.persistence.*;
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
  private long materialId;
  private String name;
  private String cate;

  @ManyToOne
  @JoinColumn(name = "company_id")
  private CompanyVO companyVO;
  private String standard;
  private String ea;
}

