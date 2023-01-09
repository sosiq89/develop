package com.develop.dev.service;

import com.develop.dev.model.CompanyVO;
import com.develop.dev.repository.CompanyRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class CompanyService {
  private final CompanyRepository companyRepository;


  public void companyNew(CompanyVO companyVO) { companyRepository.save(companyVO);
  }

  public List<CompanyVO> companyList(String searchWord) {
    List<CompanyVO> companyLists = new ArrayList<CompanyVO>();
    if(searchWord.equals(null) || searchWord.trim().isEmpty()){
      companyLists = companyRepository.findAll();
    }else{
      companyLists = companyRepository.findByName(searchWord);
    }
    return companyLists;
  }
}
