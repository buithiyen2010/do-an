package com.do_an.utt.model;

import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;

@Data
public class PostDTO {
	private Long id;
	private String name;
	private String image;
	private String description;
	private String type;
	private String createBy;
	private Long createById;
	private String createDate;

	@JsonIgnore
	private MultipartFile imageFiles;
}
