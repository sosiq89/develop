package com.develop.dev.service;

import com.develop.dev.model.MaterialVO;
import com.develop.dev.repository.MaterialRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@Transactional
@RequiredArgsConstructor
public class MaterialService {
  private final MaterialRepository materialRepository;

  public void materialNew(MaterialVO materialVO){
    System.out.println(materialVO);
    materialRepository.save(materialVO);}
}
