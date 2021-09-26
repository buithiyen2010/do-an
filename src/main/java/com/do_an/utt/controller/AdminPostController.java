package com.do_an.utt.controller;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
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
import org.springframework.web.multipart.MultipartFile;

import com.do_an.utt.model.PostDTO;
import com.do_an.utt.model.ProductDTO;
import com.do_an.utt.service.PostService;

@Controller
public class AdminPostController {

	@Autowired
	PostService postService;

	@GetMapping(value = "/staff/post/add")
	public String AdminAddProductGet(Model model, HttpServletRequest request) {
		model.addAttribute("productDTO", new ProductDTO());

		return "admin/post/AddPost";
	}

	@PostMapping(value = "/staff/post/add")
	public String AdminAddProductPost(Model model, @ModelAttribute(value = "post") PostDTO postDTO,
			@RequestParam(name = "file") MultipartFile imagefile) {

		if (imagefile.getSize() > 0) {
			String originalFilename = imagefile.getOriginalFilename();
			int lastIndex = originalFilename.lastIndexOf(".");
			String ext = originalFilename.substring(lastIndex);

			String avatarFilename = System.currentTimeMillis() + ext;
			File newfile = new File("/Users/mac/Documents/GitHub/utt/" + avatarFilename);
			FileOutputStream fileOutputStream;
			try {
				fileOutputStream = new FileOutputStream(newfile);
				fileOutputStream.write(imagefile.getBytes());
				fileOutputStream.close();
			} catch (FileNotFoundException e) {
				e.printStackTrace();
			} catch (IOException e) {
				e.printStackTrace();
			}
			postDTO.setImage(avatarFilename);
		} else if (imagefile.getSize() == 0) {
			System.out.println("khong them anh cho product");
			postDTO.setImage(null);
		}
		postService.add(postDTO);
		return "redirect:/staff/post/search";
	}

	@GetMapping(value = "/staff/post/edit")
	public String AdminEditProductGet(Model model, @RequestParam(value = "id") Long id, HttpServletRequest request) {

		PostDTO postDTO = postService.get(id);

		model.addAttribute("postDTO", postDTO);
		return "admin/post/EditPost";
	}

	@PostMapping(value = "/staff/post/edit")
	public String AdminEditProductPost(Model model, @ModelAttribute(value = "postDTO") PostDTO postDTO,
			@RequestParam(name = "file") MultipartFile imagefile) {

		if (imagefile.getSize() > 0) {
			System.out.println("thay doi anh cho product");
			// ten avatar
			String originalFilename = imagefile.getOriginalFilename();
			System.out.println("ten avatar :" + originalFilename);
			//
			int lastIndex = originalFilename.lastIndexOf(".");
			System.out.println(lastIndex);
			// duoi anh .png ,.jpg
			String ext = originalFilename.substring(lastIndex);
			System.out.println(ext);
			System.out.println("So ngau nhien :" + System.currentTimeMillis());
			// lau so ngau nhien trong system
			String avatarFilename = System.currentTimeMillis() + ext;
			File newfile = new File("/Users/mac/Documents/GitHub/utt/" + avatarFilename);
			FileOutputStream fileOutputStream;
			try {
				fileOutputStream = new FileOutputStream(newfile);
				fileOutputStream.write(imagefile.getBytes());
				fileOutputStream.close();
			} catch (FileNotFoundException e) {
				e.printStackTrace();
			} catch (IOException e) {
				e.printStackTrace();
			}
			postDTO.setImage(avatarFilename);
			postService.update(postDTO);
		} else if (imagefile.getSize() == 0) {
			System.out.println("khong thay doi anh cho product");
			postService.update(postDTO);
		}
		return "redirect:/staff/post/search";
	}

	@GetMapping(value = "/staff/post/delete")
	public String AdminDeletePostGet(@RequestParam(value = "id") int id, HttpServletRequest request) {

		postService.delete(id);

		return "redirect:/staff/post/search";
	}

	@GetMapping(value = "/staff/post/search")
	public String AdminSearchProductPost(Model model, HttpServletRequest request,
			@RequestParam(value = "name", required = false, defaultValue = "") String name,

			@RequestParam(value = "page", required = false, defaultValue = "0") int page,
			@RequestParam(value = "perpage", required = false, defaultValue = "10") int perpage) {

		System.out.println("Search");
		long count = postService.count(name);
		double result = Math.ceil((double) count / 10);
		System.out.println("result :" + result);

		List<PostDTO> listPostDTOs = postService.getAll(name,PageRequest.of(page, perpage));

		if (listPostDTOs.isEmpty()) {
			request.setAttribute("result", result);
			System.out.println("khong co ket qua");
		} else {
			System.out.println("co ket qua");
			request.setAttribute("name", name);
			request.setAttribute("result", result);
			request.setAttribute("currentPage", page);
			request.setAttribute("listPostDTOs", listPostDTOs);
		}
		return "admin/post/SearchPost";
	}
}
