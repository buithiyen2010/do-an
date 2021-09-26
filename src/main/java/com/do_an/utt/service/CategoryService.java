package com.do_an.utt.service;

import java.util.List;

import com.do_an.utt.model.CategoryDTO;

public interface CategoryService {
	void add(CategoryDTO categoryDTO);

	void update(CategoryDTO categoryDTO);

	void delete(int id);

	CategoryDTO get(Long id);

	List<CategoryDTO> search(String name ,int start ,int length);

	List<CategoryDTO> getAll(int start ,int length);
	
	long countSearch(String name);
	
	long countGetAll();

}
