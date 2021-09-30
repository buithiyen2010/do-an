package com.do_an.utt.model;

import lombok.Data;

@Data
// sp trong bill
public class BillProductDTO {
	private int id;
	private long unitPrice;
	private int quantity;
	private BillDTO billDTO;
	private ProductDTO productDTO;

	public static String formatNumberCommas(long num) {
		return String.format("%,d", num);
	}
}
