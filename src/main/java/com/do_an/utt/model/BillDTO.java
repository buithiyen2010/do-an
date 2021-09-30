package com.do_an.utt.model;

import java.sql.Date;

import lombok.Data;

@Data
public class BillDTO {
	
	private int id;
	private UserDTO userDTO;
	private Date buyDate;
	private Long priceTotal;
	private String coupon;
	private int couponPresent;
	private String status;
	private String pay;
	private Long totalProduct;

	public static String formatNumberCommas(long num) {
		return String.format("%,d", num);
	}

}
