package com.do_an.utt.dao;

import java.util.List;

import com.do_an.utt.entity.Category;


public interface CategoryDao {
	void add(Category category);

	void update(Category category);

	void delete(int id);

	Category get(Long id);

	List<Category> search(String name ,int start ,int length);

	List<Category> getAll(int start ,int length);
	
	long countSearch(String name);
	
	long countGetAll();
}