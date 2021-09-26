package com.do_an.utt.dao;

import java.util.List;

import com.do_an.utt.entity.UserAddress;


public interface UserAddressDao {
	void add(UserAddress userAddress);

	void update(UserAddress userAddress);

	void delete(int id);
	
	UserAddress get(int id);

	UserAddress getByUserId(int userId);

	List<UserAddress> getAll();
}