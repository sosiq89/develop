package com.develop.dev.controller;

import com.develop.dev.model.MaterialVO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequiredArgsConstructor
@RequestMapping(value = "/material")
public class MaterialController {

  @PostMapping(value = "/new")
  public void materialNew(@RequestBody MaterialVO materialVO){
    System.out.println(materialVO);
  }
}
