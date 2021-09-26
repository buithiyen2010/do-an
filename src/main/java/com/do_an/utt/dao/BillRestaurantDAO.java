package com.do_an.utt.dao;

import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.do_an.utt.entity.Bill;

public interface BillRestaurantDAO extends JpaRepository<Bill, Long> {

	@Query(value = "select * from bill b inner join user u  on b.id_user = u.id  where u.name like %:name% AND b.status like %:status%  And b.buy_date >= :buyDateTo And b.buy_date <= :buyDateFrom", nativeQuery = true)
	List<Bill> findBill(
			@Param("name") String name, 
			@Param("status") String status,
			@Param("buyDateTo") String buyDateTo,
			@Param("buyDateFrom") String buyDateFrom, Pageable pageable);

	@Query(value = "select count(*) from bill b inner join user u  on b.id_user = u.id  where u.name like %:name% AND b.status like %:status%  And b.buy_date >= :buyDateTo And b.buy_date <= :buyDateFrom", nativeQuery = true)
	Long countBill(@Param("name") String name, 
			@Param("status") String status,
			@Param("buyDateTo") String buyDateTo,
			@Param("buyDateFrom") String buyDateFrom);

	@Query(value = "select * from bill b inner join user u  on b.id_user = u.id  where u.name like %:name% AND b.status like %:status%  And b.buy_date >= :buyDateTo ", nativeQuery = true)
	List<Bill> findBill(
			@Param("name") String name, 
			@Param("status") String status,
			@Param("buyDateTo") String buyDateTo,
			Pageable pageable);
	
	@Query(value = "select count(*) from bill b inner join user u  on b.id_user = u.id  where u.name like %:name% AND b.status like %:status%  And b.buy_date >= :buyDateTo ", nativeQuery = true)
	Long countBill(@Param("name") String name, 
			@Param("status") String status,
			@Param("buyDateTo") String buyDateTo);
	
	
	@Query(value = "select * from bill b inner join user u  on b.id_user = u.id  where u.name like %:name% AND b.status like %:status%  ", nativeQuery = true)
	List<Bill> findBill(
			@Param("name") String name, 
			@Param("status") String status,
			 Pageable pageable);
	
	@Query(value = "select count(*) from bill b inner join user u  on b.id_user = u.id  where u.name like %:name% AND b.status like %:status%  ", nativeQuery = true)
	Long countBill(@Param("name") String name, 
			@Param("status") String status);
	
	
	@Query(value = "select * from bill b inner join user u  on b.id_user = u.id  where u.id = :userId  ", nativeQuery = true)
	List<Bill> findBill(
			@Param("userId") Long  userId,
			 Pageable pageable);
	
	@Query(value = "select count(*) from bill b inner join user u  on b.id_user = u.id  where u.id = :userId   ", nativeQuery = true)
	Long countBill(
			@Param("userId") Long userId);
	
	
	//  tổng tiền
	@Query(value = "select Sum(price_total) from bill b inner join user u  on b.id_user = u.id  where u.name like %:name% AND b.status like %:status%  And b.buy_date >= :buyDateTo And b.buy_date <= :buyDateFrom", nativeQuery = true)
	Long Sumbill(
			@Param("name") String name, 
			@Param("status") String status,
			@Param("buyDateTo") String buyDateTo,
			@Param("buyDateFrom") String buyDateFrom);
	
	
	
	@Query(value = "select Sum(price_total) from bill b inner join user u  on b.id_user = u.id  where u.name like %:name% AND b.status like %:status%  And b.buy_date >= :buyDateTo ", nativeQuery = true)
	Long Sumbill(@Param("name") String name, 
			@Param("status") String status,
			@Param("buyDateTo") String buyDateTo);
	
	
	@Query(value = "select Sum(price_total) from bill b inner join user u  on b.id_user = u.id  where u.name like %:name% AND b.status like %:status%  ", nativeQuery = true)
	Long Sumbill(@Param("name") String name, 
			@Param("status") String status);

}
