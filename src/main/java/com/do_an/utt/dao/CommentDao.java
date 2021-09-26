package com.do_an.utt.dao;

import java.util.List;

import com.do_an.utt.entity.Comment;


public interface CommentDao {

	void add(Comment comment);

	void update(Comment comment);

	void delete(int id);

	Comment get(int id);

	List<Comment> searchByProduct(int id);

}
