package com.do_an.utt.service;

import java.util.List;

import com.do_an.utt.model.CommentDTO;

public interface CommentService {
	
	void add(CommentDTO commentDTO);

	void update(CommentDTO commentDTO);

	void delete(int id);

	CommentDTO get(int id);

	List<CommentDTO> searchByProduct(int id);
}
