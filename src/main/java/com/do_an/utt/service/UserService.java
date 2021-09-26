package com.do_an.utt.service;

import java.util.List;

import org.springframework.data.domain.PageRequest;

import com.do_an.utt.model.UserDTO;

public interface UserService {
	void add(UserDTO userDTO);

	void update(UserDTO userDTO);

	void delete(int id);

	UserDTO get(int id);

	UserDTO getByUserName(String username);

	List<UserDTO> search(String findName ,int start ,int length);

	List<UserDTO> getAll(int start ,int length);
	
	List<UserDTO> getAll(String name, String role , PageRequest pageRequest);
	
	Long countGetAll(String role);
	
	long countSearch(String name);
	
	long countGetAll();
}
