package com.develop.dev.controller;

import com.develop.dev.model.MaterialVO;
import com.develop.dev.service.MaterialService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequiredArgsConstructor
@RequestMapping(value = "/material")
public class MaterialController {

  private final MaterialService materialService;

  @PostMapping(value = "/new")
  public void materialNew(@RequestBody MaterialVO materialVO){
    materialService.materialNew(materialVO);
  }
}
