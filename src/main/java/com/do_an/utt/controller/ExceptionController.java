package com.do_an.utt.controller;

import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;


@ControllerAdvice
public class ExceptionController {
	
	@ExceptionHandler(Exception.class)
	public String exception(Exception ex) {
		ex.printStackTrace();
		return "exception";
	}
}
