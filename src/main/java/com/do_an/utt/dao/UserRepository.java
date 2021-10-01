package com.do_an.utt.dao;

import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.do_an.utt.entity.User;

public interface UserRepository extends JpaRepository<User, Long>{
	
	@Query(value = "select  count(*) from user where role = :role", nativeQuery = true)
	Long countAllByRole(@Param("role") String role);
	
	@Query(value = "SELECT * FROM User u  where u.name like %:name% AND u.role = :role", nativeQuery = true)
	List<User> listUserManager(@Param("name") String name, @Param("role") String role, Pageable pageable);

	boolean existsByUsername(String username);
}
