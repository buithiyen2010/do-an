package com.do_an.utt.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.do_an.utt.model.BillProductDTO;
import com.do_an.utt.service.BillProductService;

@Controller
public class AdminBillProductController {
	@Autowired
	BillProductService billProductService;

	@GetMapping(value = "/staff/billproduct/search-bill")
	public String AdminSearchBillGet(@RequestParam(value = "id") int id, HttpServletRequest request) {
		Integer page = request.getParameter("page") == null ? 1 : Integer.valueOf(request.getParameter("page"));
		
		List<BillProductDTO> listBillProductDTOs = billProductService.searchByBillId(id, (page - 1) * 5, 5);
		long count = billProductService.countSearchByBillId(id);
		double result = Math.ceil((double) count / 5);

		request.setAttribute("listBillProductDTOs", listBillProductDTOs);
		request.setAttribute("result", result);

		return "admin/billproduct/SearchBillProduct";
	}
}
