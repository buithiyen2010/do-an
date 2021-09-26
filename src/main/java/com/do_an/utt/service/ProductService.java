package com.do_an.utt.service;

import java.util.List;

import org.springframework.data.domain.Pageable;

import com.do_an.utt.model.ProductDTO;

public interface ProductService {
	void add(ProductDTO productDTO);

	void update(ProductDTO productDTO);

	void delete(int id);

	ProductDTO get(int id);

	List<ProductDTO> search(String name, int start, int length);

	long countSearch(String name);

	List<ProductDTO> getAll(int start, int maxPerPage);

	long countGetAll();

	List<ProductDTO> filterProduct(String nameCategory, long fromPrice, long toPrice, int start, int length);

	long countFilterProduct(String nameCategory, long fromPrice, long toPrice);

	// index client

	List<ProductDTO> getAllByCategory(String name, Pageable pageable);
	
	List<ProductDTO> getAllByCategoryId(Long id, Pageable pageable);
	
	List<ProductDTO> getAllByName(String name, Pageable pageable);
	
	List<ProductDTO> getAllByName( Pageable pageable);
	
	Long countByCategory(Long id);
	
	Long countByCategory(String name);
	
	Long countAll();

}
