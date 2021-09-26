package com.do_an.utt.service;

import java.util.List;

import com.do_an.utt.model.BillProductDTO;


public interface BillProductService {
	void add(BillProductDTO billProductDTO);

	void update(BillProductDTO billProductDTO);

	void delete(int id);

	BillProductDTO get(int id);

	List<BillProductDTO> searchByBillId(int idBill ,int start ,int length);
	
	long countSearchByBillId(int idBill);
}
