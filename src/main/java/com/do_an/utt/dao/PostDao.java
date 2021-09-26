package com.do_an.utt.dao;

import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.do_an.utt.entity.Post;

public interface PostDao extends JpaRepository<Post, Long> {

	@Query(value = "select * from post c where lower(c.name) like lower(concat('%',:name,'%')) ", nativeQuery = true)
	List<Post> findPost( @Param("name") String name,Pageable pageable);
	
	@Query(value = "select count(*) from post c where lower(c.name) like lower(concat('%',:name,'%')) ", nativeQuery = true)
	Long countPost( @Param("name") String name);
	
	// bài viết
	@Query(value = "select * from post p where type ='BAI-VIET' ", nativeQuery = true)
	List<Post> findPost1(Pageable pageable);
	
	@Query(value = "select count(*) from post p  where type ='BAI-VIET' ", nativeQuery = true)
	Long countPost1();
	
	// sự kiện
	
	@Query(value = "select * from post p where type ='SU-KIEN' ", nativeQuery = true)
	List<Post> findPost2(Pageable pageable);
	
	@Query(value = "select count(*) from post p  where type ='SU-KIEN' ", nativeQuery = true)
	Long countPost2();
	
}
