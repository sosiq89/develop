package com.develop.dev.service;

import com.develop.dev.model.CompanyVO;
import com.develop.dev.repository.CompanyRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@Transactional
@RequiredArgsConstructor
public class CompanyService {
  private final CompanyRepository companyRepository;


  public void companyNew(CompanyVO companyVO) { companyRepository.save(companyVO);
  }
}
