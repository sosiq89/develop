package com.develop.dev.controller;

import com.develop.dev.model.CompanyVO;
import com.develop.dev.service.CompanyService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequiredArgsConstructor
@RequestMapping(value = "/purchase")
public class CompanyController {
  private final CompanyService companyService;
  @PostMapping(value = "/companyNew")
  public String companyNew(@RequestBody CompanyVO companyVO){
    companyService.companyNew(companyVO);
    return "";
  }
}
