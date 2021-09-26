package com.do_an.utt.dao;

import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.do_an.utt.entity.Product;

public interface ProductDaoNative extends JpaRepository<Product, Long> {

	@Query(value = "SELECT * FROM product p inner join category c  on p.id_category=c.id where c.name = :categoryName",
			 nativeQuery = true)
	List<Product> findProductByCategory(@Param("categoryName") String categoryName, Pageable pageable);
	
	
	@Query(value = "SELECT * FROM product p inner join category c  on p.id_category=c.id where c.id = :categoryId",
			 nativeQuery = true)
	List<Product> findProductByCategory(@Param("categoryId") Long id, Pageable pageable);
	
	@Query(value = "SELECT * FROM product p  where lower(p.name) like lower(concat('%',:name,'%'))",
			 nativeQuery = true)
	List<Product> findProduct(@Param("name") String name, Pageable pageable);
	
	
	
	@Query(value = "SELECT count(*) FROM product p inner join category c  on p.id_category=c.id where c.id = :categoryId",
			 nativeQuery = true)
	Long findProductByCategoryCount(@Param("categoryId") Long id);
	
	@Query(value = "SELECT count(*) FROM product p  where lower(p.name) like lower(concat('%',:name,'%'))",
			 nativeQuery = true)
	Long findProductByName(@Param("name") String id);
	
	@Query(value = "SELECT * FROM product p ORDER BY p.best_seller DESC",
			 nativeQuery = true)
	List<Product> findProductByCategory(Pageable pageable);
	
	
	@Query(value = "SELECT count(*) FROM product p  ORDER BY best_seller DESC",
			 nativeQuery = true)
	Long findProductByName();
	
	
}
