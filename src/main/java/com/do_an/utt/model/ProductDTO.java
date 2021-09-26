package com.do_an.utt.model;

import lombok.Data;

@Data
public class ProductDTO {
	private int id;
	private String name;
	private int quantity;
	private Long price;
	private String image;
	private String description;
	private Long cupon;
	private CategoryDTO categoryDTO;
	
	private Long bestSeller;
}
