package com.develop.dev.repository;

import com.develop.dev.model.CompanyVO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CompanyRepository extends JpaRepository<CompanyVO, Long> {

  @Query(value = "SELECT c FROM company c WHERE c.name LIKE %:name%")
  List<CompanyVO> findByName(@Param("name") String searchWord);

  @Query(value = "SELECT c FROM company c WHERE c.companyId =:companyId")
  CompanyVO findByCompany(@Param("companyId") long companyId);
}
