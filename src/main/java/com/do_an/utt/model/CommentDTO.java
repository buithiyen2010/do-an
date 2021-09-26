package com.do_an.utt.model;

import lombok.Data;

@Data
public class CommentDTO {
	private int id; 
	private String content;
	private String createdDate;
	private UserDTO userDTO;
	private ProductDTO productDTO;
}
