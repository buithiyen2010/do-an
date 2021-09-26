package com.do_an.utt.dao;

import java.util.List;

import com.do_an.utt.entity.BillProduct;

public interface BillProductDao {
	void add(BillProduct billProduct);

	void update(BillProduct billProduct);

	void delete(int id);

	BillProduct get(int id);

	List<BillProduct> searchByBillId(int idBill ,int start ,int length);
	
	long countSearchByBillId(int idBill);
}
