package com.develop.dev.repository;

import com.develop.dev.model.CompanyVO;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CompanyRepository extends JpaRepository<CompanyVO, Long> {
}
