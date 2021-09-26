package com.do_an.utt.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.do_an.utt.model.BillDTO;
import com.do_an.utt.service.BillService;

@Controller
public class AdminBillController {

	@Autowired
	BillService billService;
	
	

//	@GetMapping(value = "/staff/bill/search")
//	public String AdminShowAllBillGet(HttpServletRequest request,
//			@RequestParam(value = "nameBuyer", required = false) String nameBuyer) {
//		Integer page = request.getParameter("page") == null ? 1 : Integer.valueOf(request.getParameter("page"));
//
//		if (nameBuyer != null && !nameBuyer.equals("null")) {
//			long count = billService.countSearchByNameBuyer(nameBuyer);
//			System.out.println("count bill :" + count);
//			double result = Math.ceil((double) count / 5);
//			List<BillDTO> listBillDTOs = billService.searchByNameBuyer(nameBuyer, (page - 1) * 5, 5);
//			if (listBillDTOs.isEmpty()) {
//				System.out.println("khong co ket qua");
//				request.setAttribute("result", result);
//			} else {
//				System.out.println("co ket qua");
//				request.setAttribute("result", result);
//				request.setAttribute("currentPage", page);
//				request.setAttribute("name", nameBuyer);
//				request.setAttribute("listBillDTOs", listBillDTOs);
//			}
//		} else {
//			long count = billService.countShowAllBill();
//			double result = Math.ceil((double) count / 5);
//			List<BillDTO> listBillDTOs = billService.showAllBill((page - 1) * 5, 5);
//			request.setAttribute("listBillDTOs", listBillDTOs);
//			request.setAttribute("currentPage", page);
//			request.setAttribute("result", result);
//		}
//		return "admin/bill/SearchBill";
//	}

	@GetMapping(value = "/staff/bill/search")
	public String AdminShowAllBillGet(HttpServletRequest request,
			@RequestParam(value = "name", required = false, defaultValue = "") String name,
			@RequestParam(value = "status", required = false, defaultValue = "") String status,
			@RequestParam(value = "to", required = false, defaultValue = "") String to,
			@RequestParam(value = "from", required = false, defaultValue = "") String from,
			@RequestParam(value = "page", required = false, defaultValue = "0") int page,
			@RequestParam(value = "perpage", required = false, defaultValue = "10") int perpage) {
		
		Long sum= billService.Sumbill(name, status, to, from);
		
		
		
		long count = billService.countSearchByNameBuyer(name,status,to, from);

		System.out.println("count bill :" + count);
		double result = Math.ceil((double) count / 10);
		List<BillDTO> listBillDTOs = billService.searchByNameBuyer(name,status,to, from, PageRequest.of(page, perpage));

		if (listBillDTOs.isEmpty()) {
			System.out.println("khong co ket qua");
			request.setAttribute("result", result);
		} else {
			request.setAttribute("sum" ,sum);
			request.setAttribute("count" ,count);
			System.out.println("co ket qua");
			request.setAttribute("to", to);
			request.setAttribute("from", from);
			request.setAttribute("result", result);
			request.setAttribute("currentPage", page);
			request.setAttribute("listBillDTOs", listBillDTOs);
		}
		return "/admin/bill/searchBill";
	}

	@GetMapping(value = "/staff/bill/delete")
	public String AdminDeleteUser(HttpServletRequest request, @RequestParam(value = "id") int id,
			@RequestParam(value = "page", required = false) int currentPage,
			@RequestParam(value = "name", required = false) String name) {
		billService.delete(id);
		return "redirect:/staff/bill/search?page=" + currentPage + "&name=" + name;
	}
	
	@GetMapping(value = "/member/bill/delete")
	public String AdminDeleteUser1(HttpServletRequest request, @RequestParam(value = "id") int id
			) {
		billService.delete(id);
		return "redirect:/member/bill";
	}

	@GetMapping(value = "/staff/bill/update/status")
	public String AdminDeleteUser1(HttpServletRequest request, Model model, @RequestParam(value = "id") int id) {

		BillDTO billDTO = billService.get(id);
		model.addAttribute("billDTO", billDTO);

		return "admin/bill/EditBill";
	}

	@PostMapping(value = "/staff/bill/update/status")
	public String AdminEditCouponPost(@ModelAttribute(value = "billDTO") BillDTO billDTO) {
		billService.changeStatus(billDTO);

		return "redirect:/staff/bill/search";
	}
}
