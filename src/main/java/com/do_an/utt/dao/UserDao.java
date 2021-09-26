package com.do_an.utt.dao;

import java.util.List;

import com.do_an.utt.entity.User;


public interface UserDao {
	void add(User user);

	void update(User user);

	void delete(int id);

	User get(int id);

	User getByUserName(String username );

	List<User> search(String findName ,int start ,int length);
	
	long countSearch(String name);

	List<User> getAll(int start ,int length);
	
	long countGetAll();
}