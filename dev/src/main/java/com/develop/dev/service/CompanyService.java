package com.develop.dev.service;

import com.develop.dev.model.CompanyVO;
import com.develop.dev.repository.CompanyRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class CompanyService {
  private final CompanyRepository companyRepository;


  public void companyNew(CompanyVO companyVO) { companyRepository.save(companyVO);}

  public List<CompanyVO> companyList(String searchWord) {
    List<CompanyVO> companyLists = new ArrayList<CompanyVO>();
    if(searchWord.equals(null) || searchWord.trim().isEmpty()){
      companyLists = companyRepository.findAll(Sort.by(Sort.Direction.DESC, "companyId"));
    }else{
      companyLists = companyRepository.findByName(searchWord);
    }
    return companyLists;
  }

  public void delCompany(long companyId) { companyRepository.deleteById(companyId);}


  public void editCompany(CompanyVO companyVO) {
    CompanyVO companyOrigin = new CompanyVO();

    companyOrigin = companyRepository.findByCompany(companyVO.getCompanyId());

    companyOrigin.setName(companyVO.getName());
    companyOrigin.setCate(companyVO.getCate());
    companyOrigin.setManager(companyVO.getManager());
    companyOrigin.setLocation(companyVO.getLocation());

  }
}
