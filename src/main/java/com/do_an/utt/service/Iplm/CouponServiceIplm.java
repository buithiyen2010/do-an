package com.do_an.utt.service.Iplm;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.do_an.utt.dao.CouponDao;
import com.do_an.utt.entity.Coupon;
import com.do_an.utt.model.CouponDTO;
import com.do_an.utt.service.CouponService;
import com.do_an.utt.utils.DateTimeUtils;

@Service
public class CouponServiceIplm implements CouponService{
	@Autowired
	CouponDao couponDao;
	
	@Override
	public void add(CouponDTO couponDTO) {
		Coupon coupon=new Coupon();
		coupon.setCode(couponDTO.getCode());
		coupon.setPresent(couponDTO.getPresent());
		coupon.setExpiredDate(DateTimeUtils.parseDate(couponDTO.getExpiredDate(), DateTimeUtils.DD_MM_YYYY));
		
		couponDao.add(coupon);
	}

	@Override
	public void edit(CouponDTO couponDTO) {
		Coupon coupon=couponDao.get(couponDTO.getId());
		if(coupon != null) {
			coupon.setId(couponDTO.getId());
			coupon.setCode(couponDTO.getCode());
			coupon.setPresent(couponDTO.getPresent());
			coupon.setExpiredDate(DateTimeUtils.parseDate(couponDTO.getExpiredDate(), DateTimeUtils.DD_MM_YYYY));
			couponDao.edit(coupon);
		}		
	}

	@Override
	public void delete(int id) {
		Coupon coupon=couponDao.get(id);
		if(coupon != null) {			
			couponDao.delete(id);
		}		
	}

	@Override
	public CouponDTO get(int id) {
		Coupon coupon=couponDao.get(id);
		return convert(coupon);
	}

	@Override
	public  List<CouponDTO> searchByCode(String code ,int start ,int length) {
		List<Coupon> listCoupons = couponDao.searchByCode(code ,start ,length);
		List<CouponDTO> listCouponDTOs=new ArrayList<CouponDTO>();
		for (Coupon coupon : listCoupons) {
			listCouponDTOs.add(convert(coupon));
		}
		return listCouponDTOs;
	}

	@Override
	public List<CouponDTO> showAll(int start ,int length) {
		List<Coupon> listCoupons=couponDao.showAll(start ,length);
		List<CouponDTO> listCouponDTOs=new ArrayList<CouponDTO>();
		
		for (Coupon coupon : listCoupons) {
			listCouponDTOs.add(convert(coupon));
		}	
		return listCouponDTOs;
	}
	
	private CouponDTO convert(Coupon coupon) {
		CouponDTO couponDTO=new CouponDTO();
		couponDTO.setId(coupon.getId());
		couponDTO.setCode(coupon.getCode());
		couponDTO.setPresent(coupon.getPresent());
		couponDTO.setExpiredDate(DateTimeUtils.formatDate(coupon.getExpiredDate(), DateTimeUtils.DD_MM_YYYY));
		return couponDTO;
	}

	@Override
	public long countShowAll() {
		long count = couponDao.countShowAll();
		return count;
	}

	@Override
	public long countSearchByCode(String code) {
		long count = couponDao.countSearchByCode(code);
		return count;
	}

	@Override
	public CouponDTO getByCode(String code) {
		Coupon coupon = couponDao.getByCode(code);
		return convert(coupon);
	}
}
