package com.do_an.utt.model;

import lombok.Data;

@Data
public class CouponDTO {
	private int id;
	private String code;
	private int present;
	private String expiredDate;
}
