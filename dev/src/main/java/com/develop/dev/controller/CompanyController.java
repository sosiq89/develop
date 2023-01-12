package com.develop.dev.controller;

import com.develop.dev.model.CompanyVO;
import com.develop.dev.service.CompanyService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

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

  @GetMapping(value = "/companyList")
  public ResponseEntity<List<CompanyVO>> companyList(@RequestParam String searchWord){
    List<CompanyVO> companyLists = new ArrayList<CompanyVO>();

    companyLists = companyService.companyList(searchWord);

    return ResponseEntity.ok(companyLists);
  }

  @DeleteMapping(value = "/delCompany")
  public void delCompany(@RequestParam long companyId){companyService.delCompany(companyId);}

  @PostMapping(value = "/companyEdit")
  public void companyEdit(@RequestBody CompanyVO companyVO){companyService.editCompany(companyVO);}
}
