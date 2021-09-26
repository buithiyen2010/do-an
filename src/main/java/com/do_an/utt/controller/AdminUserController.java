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

import com.do_an.utt.dao.UserRepository;
import com.do_an.utt.model.UserDTO;
import com.do_an.utt.service.UserService;
import com.do_an.utt.utils.RoleEnum;

@Controller
public class AdminUserController {

	@Autowired
	private UserService userService;

	@Autowired
	private UserRepository userRepository;

	@GetMapping(value = "/staff/user/add")
	public String AdminAddUserGet() {
		return "admin/user/AddUser";
	}

	@PostMapping(value = "/staff/user/add")
	public String AdminAddUserPost(Model model, @ModelAttribute(value = "user") UserDTO userDTO,
			@RequestParam(name = "file") MultipartFile imagefile) {
		System.out.println("role :" + userDTO.getRole());
		if (imagefile.getSize() > 0) {
			System.out.println("Them anh cho user");
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
			userDTO.setAvatar(avatarFilename);
		} else if (imagefile.getSize() == 0) {
			System.out.println("khong them anh cho user");
			userDTO.setAvatar(null);
		}
		userDTO.setEnabled(true);
		userService.add(userDTO);
		return "redirect:/staff/user/search";
	}
	
	
	
	@GetMapping(value = "/admin/user/add")
	public String AdminAddUserGet1() {
		return "admin/user/AddStaff";
	}
	
	@PostMapping(value = "/admin/user/add")
	public String AdminAddUserPost1(Model model, @ModelAttribute(value = "user") UserDTO userDTO,
			@RequestParam(name = "file") MultipartFile imagefile) {
		System.out.println("role :" + userDTO.getRole());
		if (imagefile.getSize() > 0) {
			System.out.println("Them anh cho user");
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
			userDTO.setAvatar(avatarFilename);
		} else if (imagefile.getSize() == 0) {
			System.out.println("khong them anh cho user");
			userDTO.setAvatar(null);
		}
		userDTO.setEnabled(true);
		userService.add(userDTO);
		return "redirect:/admin/staff/search";
	}
	
	
	

	@GetMapping(value = "/staff/user/edit")
	public String AdminEditUserGet(Model model, @RequestParam(value = "id") int id) {
		try {
			UserDTO userDTO = userService.get(id);
			System.out.println("Anh " + userDTO.getAvatar());
			System.out.println("Anh " + userDTO.getId());
			model.addAttribute("userDTO", userDTO);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return "admin/user/EditUser";
	}

	@PostMapping(value = "/staff/user/edit")
	public String AdminEditUserPost(Model model, @ModelAttribute(value = "userDTO") UserDTO userDTO,
			@RequestParam(name = "file") MultipartFile imagefile) {
		System.out.println("role userDTO " + userDTO.getRole());
		if (imagefile.getSize() > 0) {
			System.out.println("thay doi anh cho user");
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
			userDTO.setEnabled(true);
			userDTO.setAvatar(avatarFilename);
			userService.update(userDTO);
		} else if (imagefile.getSize() == 0) {
			System.out.println("khong thay doi anh cho user");
			userDTO.setEnabled(true);
			userService.update(userDTO);
		}
		return "redirect:/staff/user/search";
	}
	
	
	@GetMapping(value = "/admin/user/edit")
	public String AdminEditUserGet1(Model model, @RequestParam(value = "id") int id) {
		try {
			UserDTO userDTO = userService.get(id);
			System.out.println("Anh " + userDTO.getAvatar());
			System.out.println("Anh " + userDTO.getId());
			model.addAttribute("userDTO", userDTO);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return "admin/user/EditStaff";
	}

	@PostMapping(value = "/admin/user/edit")
	public String AdminEditUserPost1(Model model, @ModelAttribute(value = "userDTO") UserDTO userDTO,
			@RequestParam(name = "file") MultipartFile imagefile) {
		System.out.println("role userDTO " + userDTO.getRole());
		if (imagefile.getSize() > 0) {
			System.out.println("thay doi anh cho user");
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
			userDTO.setEnabled(true);
			userDTO.setAvatar(avatarFilename);
			userService.update(userDTO);
		} else if (imagefile.getSize() == 0) {
			System.out.println("khong thay doi anh cho user");
			userDTO.setEnabled(true);
			userService.update(userDTO);
		}
		return "redirect:/admin/staff/search";
	}

	@GetMapping(value = "/staff/user/delete")
	public String AdminDeleteUser(Model model, @RequestParam(value = "id") String id,
			@RequestParam(value = "page", required = false) int currentPage,
			@RequestParam(value = "name", required = false) String name) {
		userService.delete(Integer.valueOf(id));

		System.out.println("delete name:" + name);

		return "redirect:/staff/user/search?page=" + currentPage + "&name=" + name;
	}
	
	
	@GetMapping(value = "/admin/user/delete")
	public String AdminDeleteUser1(Model model, @RequestParam(value = "id") String id,
			@RequestParam(value = "page", required = false) int currentPage,
			@RequestParam(value = "name", required = false) String name) {
		userService.delete(Integer.valueOf(id));

		System.out.println("delete name:" + name);

		return "redirect:/admin/staff/search?page=" + currentPage + "&name=" + name;
	}

	@GetMapping(value = "/admin/user/search")
	public String AdminSearchUserPost(HttpServletRequest request,
			@RequestParam(value = "name", required = false) String name) {
		System.out.println("name :" + name);
		Integer page = request.getParameter("page") == null ? 1 : Integer.valueOf(request.getParameter("page"));

		if (name != null && !name.equals("null")) {
			long count = userService.countSearch(name);
			double result = Math.ceil((double) count / 5);
			List<UserDTO> listUserDTOs = userService.search(name, (page - 1) * 5, 5);
			if (listUserDTOs.isEmpty()) {
				System.out.println("khong co ket qua");
			} else {
				System.out.println("co ket qua");
				request.setAttribute("result", result);
				request.setAttribute("name", name);
				request.setAttribute("listUserDTOs", listUserDTOs);
				request.setAttribute("currentPage", page);
			}
		} else {
			long count = userService.countGetAll();
			double result = Math.ceil((double) count / 5);
			List<UserDTO> listUserDTOs = userService.getAll((page - 1) * 5, 5);
			System.out.println("result :" + result);
			request.setAttribute("result", result);
			request.setAttribute("currentPage", page);
			request.setAttribute("listUserDTOs", listUserDTOs);
		}

		return "admin/user/SearchUser";
	}
	
	
	@GetMapping(value = "/staff/user/search")
	public String AdminSearchUserPost1(HttpServletRequest request,
			@RequestParam(value = "name", required = false, defaultValue = "") String name,
			@RequestParam(value = "role", required = false, defaultValue = "") String role,
			@RequestParam(value = "page", required = false, defaultValue = "0") int page,
			@RequestParam(value = "perPage", required = false, defaultValue = "10") int perPage

	) {

		role = RoleEnum.ROLE_MEMBER.name();

		Long count = userRepository.countAllByRole(role);

		double result = Math.ceil((double) count / 5);

		List<UserDTO> listUserDTOs = userService.getAll(name, role, PageRequest.of(page, perPage));

		request.setAttribute("result", result);
		request.setAttribute("name", name);
		request.setAttribute("listUserDTOs", listUserDTOs);
		request.setAttribute("currentPage", page);

		return "admin/user/SearchUser";
	}
	

	@GetMapping(value = "/admin/staff/search")
	public String AdminSearchUserPost(HttpServletRequest request,
			@RequestParam(value = "name", required = false, defaultValue = "") String name,
			@RequestParam(value = "role", required = false, defaultValue = "") String role,
			@RequestParam(value = "page", required = false, defaultValue = "0") int page,
			@RequestParam(value = "perPage", required = false, defaultValue = "10") int perPage

	) {

		role = RoleEnum.ROLE_STAFF.name();

		Long count = userRepository.countAllByRole(role);

		double result = Math.ceil((double) count / 5);

		List<UserDTO> listUserDTOs = userService.getAll(name, role, PageRequest.of(page, perPage));

		request.setAttribute("result", result);
		request.setAttribute("name", name);
		request.setAttribute("listUserDTOs", listUserDTOs);
		request.setAttribute("currentPage", page);

		return "admin/user/SearchStaff";
	}

}