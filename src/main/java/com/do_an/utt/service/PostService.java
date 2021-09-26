package com.do_an.utt.service;

import java.util.List;

import org.springframework.data.domain.PageRequest;

import com.do_an.utt.model.PostDTO;

public interface PostService {

	void add(PostDTO postDTO);

	void update(PostDTO postDTO);

	void delete(int id);

	PostDTO get(Long id);

	List<PostDTO> getAll( String name ,PageRequest pageRequest);

	Long count(String name);
	
	//  bai viet
	List<PostDTO> getAll1(PageRequest pageRequest);
	
	Long count1();
	
	// su kien
    List<PostDTO> getAll2(PageRequest pageRequest);
	
	Long count2();
	
	// clinet - index
	
	
	
	
}
