package com.do_an.utt.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.do_an.utt.model.CategoryDTO;
import com.do_an.utt.service.CategoryService;

@Controller
public class AdminCategoryController {
	@Autowired
	private CategoryService categoryService;

	@GetMapping(value = "/staff/category/add")
	public String AdminAddCategoryGet() {
		return "admin/category/AddCategory";
	}

	@PostMapping(value = "/staff/category/add")
	public String AdminAddCategoryPost(Model model, @ModelAttribute(value = "category") CategoryDTO categoryDTO) {
		categoryService.add(categoryDTO);
		return "redirect:/staff/category/search";
	}
	
	@GetMapping(value = "/staff/category/edit")
	public String AdminEditCategoryGet(Model model, @RequestParam(value = "id") Long id) {
		CategoryDTO categoryDTO = categoryService.get(id);
		model.addAttribute("categoryDTO", categoryDTO);
		return "admin/category/EditCategory";
	}

	@PostMapping(value = "/staff/category/edit")
	public String AdminEditCategoryPost(@ModelAttribute(value = "categoryDTO") CategoryDTO categoryDTO) {
		System.out.println(categoryDTO.getId()+categoryDTO.getName());
		categoryService.update(categoryDTO);
		return "redirect:/staff/category/search";
	}

	@GetMapping(value = "/staff/category/search")
	public String AdminSearchCategoryPost(HttpServletRequest request, @RequestParam(value = "name" ,required = false) String name) {
		Integer page = request.getParameter("page") == null ? 1 : Integer.valueOf(request.getParameter("page"));
		
		if(name !=  null && !name.equals("null")) {
			long count = categoryService.countSearch(name);
			double result = Math.ceil((double) count/5);
			List<CategoryDTO> listCategoryDTOs = categoryService.search(name ,(page-1)*5 ,5);
			if(listCategoryDTOs.isEmpty()) {
				System.out.println("khong tim thay name category nao");
				request.setAttribute("result", result);
			}
			else {
				request.setAttribute("name", name);
				request.setAttribute("currentPage", page);
				request.setAttribute("listCategoryDTOs", listCategoryDTOs);	
				request.setAttribute("result", result);
			}
		}
		else {
			long count = categoryService.countGetAll();
			double result = Math.ceil((double) count/5);
			List<CategoryDTO> listCategoryDTOs = categoryService.getAll((page-1)*5 ,5);
			request.setAttribute("listCategoryDTOs", listCategoryDTOs);
			request.setAttribute("currentPage", page);
			request.setAttribute("result", result);
		}
		
		return "admin/category/SearchCategory";
	}
	
	@GetMapping(value = "/staff/category/delete")
	public String AdminDeleteCategory(Model model, @RequestParam(value = "id") int id ,
			@RequestParam(value = "page" ,required = false) int currentPage ,@RequestParam(value = "name" ,required = false) String name) {
		categoryService.delete(id);
		return "redirect:/staff/category/search?page="+currentPage+"&name="+name;
	}
	
}
