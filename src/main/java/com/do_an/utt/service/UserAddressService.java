package com.do_an.utt.service;

import java.util.List;

import com.do_an.utt.model.UserAddressDTO;

public interface UserAddressService {
	void add(UserAddressDTO userAddressDTO);

	void update(UserAddressDTO userAddressDTO);

	void delete(int id);
	
	UserAddressDTO get(int id);

	UserAddressDTO getByUserId(int userId);

	List<UserAddressDTO> getAll();
}
