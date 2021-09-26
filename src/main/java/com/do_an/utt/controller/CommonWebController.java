package com.do_an.utt.controller;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;

import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class CommonWebController {

//	@GetMapping(value = "/member/home")
//	private String home(Model model) {
//		UserPrincipal currentUser = (UserPrincipal) SecurityContextHolder.getContext().getAuthentication()
//				.getPrincipal();
//		if (currentUser.getRole().equals("ROLE_ADMIN")) {
//			return "redirect:/admin/user/search";
//		} else if (currentUser.getRole().equals("ROLE_MEMBER")) {
//			return "redirect:/products";
//		}
//
//		return "redirect:/member/profile";
//	}

	@GetMapping(value = "/download") // avatar=?
	public void download(HttpServletResponse response, @RequestParam("avatar") String image) {
		final String uploadFolder = "/Users/mac/Documents/GitHub/utt/";
		File file = new File(uploadFolder + File.separator + image);
		if (file.exists()) {
			try {
				Files.copy(file.toPath(), response.getOutputStream());
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
	}

	@GetMapping(value = "/common/product-detail") // avatar=?
	public String download() {
		return "client/product-detail";
	}

	@GetMapping(value = "/lien-he") // avatar=?
	public String lienHe() {
		return "client/lien-he";
	}

	@GetMapping(value = "/gioi-thieu-chung") // avatar=?
	public String gioiThieuChung() {
		return "client/gioi-thieu-chung";
	}

	@GetMapping(value = "/he-thong-nha-sach") // avatar=?
	public String heThongNhaSach() {
		return "client/he-thong-nha-sach";
	}
	
	@GetMapping(value = "/hoat-dong-kinh-doanh") // avatar=?
	public String hoatDongKinhDoanh() {
		return "client/hoat-dong-kinh-doanh";
	}
	
	@GetMapping(value = "/post/list") // avatar=?
	public String post() {
		return "client/post-bai-viet";
	}

}
