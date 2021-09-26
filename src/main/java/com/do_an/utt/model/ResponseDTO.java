package com.do_an.utt.model;

import java.io.Serializable;
import java.util.List;

import lombok.Data;

@Data
public class ResponseDTO<T> implements Serializable {
	private static final long serialVersionUID = 1L;
	private List<T> data;

}
