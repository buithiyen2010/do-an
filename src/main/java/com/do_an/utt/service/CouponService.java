package com.do_an.utt.service;

import java.util.List;

import com.do_an.utt.model.CouponDTO;

public interface CouponService {
	
	void add(CouponDTO couponDTO);
	
	void edit(CouponDTO couponDTO);

	void delete(int id);
	
	CouponDTO get(int id);
	
	CouponDTO getByCode(String code);
	
	List<CouponDTO> searchByCode(String code ,int start ,int length);// duy nhat
	
	List<CouponDTO> showAll(int start ,int length);
	
	long countShowAll();
	
	long countSearchByCode(String code);
}
