package com.do_an.utt.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.do_an.utt.model.PostDTO;
import com.do_an.utt.service.PostService;

@Controller
public class PostClinetController {

	@Autowired
	private PostService postService;

	// bai viet

	@GetMapping(value = "/post-bai-viet") // avatar=?
	public String heThongNhaSach(HttpServletRequest request,
			@RequestParam(value = "page", required = false, defaultValue = "0") int page,
			@RequestParam(value = "perpage", required = false, defaultValue = "3") int perpage) {
		

		long count = postService.count2();
		double result = Math.ceil((double) count/3);
		

		List<PostDTO> postDTO = postService.getAll1(PageRequest.of(page, perpage));
		request.setAttribute("postDTO", postDTO);
		
		request.setAttribute("result", result);
		request.setAttribute("currentPage", page);

		return "client/post-bai-viet";
	}
	
	@GetMapping(value = "/post-su-kien") // avatar=?
	public String heThongNhaSach1(HttpServletRequest request,
			@RequestParam(value = "page", required = false, defaultValue = "0") int page,
			@RequestParam(value = "perpage", required = false, defaultValue = "3") int perpage) {
		
		
		long count = postService.count2();
		double result = Math.ceil((double) count/3);

		List<PostDTO> postDTO = postService.getAll2(PageRequest.of(page, perpage));
		
		
		request.setAttribute("postDTO", postDTO);
		request.setAttribute("result", result);
		request.setAttribute("currentPage", page);

		return "client/post-su-kien";
	}


	@GetMapping(value = "/post-bai-viet-detail")
	public String ClientDetailProductGet(HttpServletRequest request, @RequestParam(value = "id") Long id,
			
			@RequestParam(value = "page", required = false, defaultValue = "0") int page,
			@RequestParam(value = "perpage", required = false, defaultValue = "3") int perpage) {
		
		
		long count = postService.count1();
		double result = Math.ceil((double) count/3);
		
		PostDTO post = postService.get(id);
		request.setAttribute("post", post);
		
		List<PostDTO> postDTO = postService.getAll1(PageRequest.of(page, perpage));
		request.setAttribute("postDTO", postDTO);
		
		List<PostDTO> postDTO1 = postService.getAll1(PageRequest.of(0, 4));
		request.setAttribute("postDTO", postDTO1);
		
		request.setAttribute("result", result);
		request.setAttribute("currentPage", page);

		return "client/post-detail-bai-viet";
	}
	
	@GetMapping(value = "/post-su-kien-detail")
	public String ClientDetailProductGet1(HttpServletRequest request, @RequestParam(value = "id") Long id,
			@RequestParam(value = "page", required = false, defaultValue = "0") int page,
			@RequestParam(value = "perpage", required = false, defaultValue = "3") int perpage) {
		
		
		long count = postService.count2();
		double result = Math.ceil((double) count/3);
		
		PostDTO post = postService.get(id);
		request.setAttribute("post", post);
		
		List<PostDTO> postDTO = postService.getAll2(PageRequest.of(page, perpage));
		request.setAttribute("postDTO", postDTO);
		
		List<PostDTO> postDTO2 = postService.getAll2(PageRequest.of(0, 4));
		
		request.setAttribute("result", result);
		request.setAttribute("currentPage", page);
		request.setAttribute("postDTO", postDTO);
		request.setAttribute("postDTO", postDTO2);
		
		return "client/post-detail-su-kien";
	}
}
