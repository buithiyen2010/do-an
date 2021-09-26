package com.do_an.utt.service;

import java.util.List;

import org.springframework.data.domain.PageRequest;

import com.do_an.utt.model.BillDTO;

public interface BillService {
	void add(BillDTO billDTO);

	void update(BillDTO billDTO);

	void delete(int id);

	BillDTO get(int id);
	
	void changeStatus ( BillDTO billDTO);
;
	List<BillDTO> searchByNameBuyer(String nameBuyer ,int start ,int length);
	
	List<BillDTO> searchByNameBuyer(String name,String status ,String to, String from ,PageRequest pageRequest);

	List<BillDTO> searchByBuyerId(int buyerId ,int start ,int length);
	
	List<BillDTO> showAllBill(int start ,int length);
	
	List<BillDTO> showAllBill(Long id ,PageRequest pageRequest);
	
	long countSearchByNameBuyer(String nameBuyer);
	
	long countSearchByNameBuyer(String nanme , String status ,String to, String from);

	long countSearchByBuyerId(int buyerId);
	
	long countShowAllBill();
	
	
	Long Sumbill (String nanme , String status ,String to, String from);
}
