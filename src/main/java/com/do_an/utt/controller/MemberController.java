package com.do_an.utt.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.do_an.utt.model.BillDTO;
import com.do_an.utt.model.BillProductDTO;
import com.do_an.utt.model.CommentDTO;
import com.do_an.utt.model.CouponDTO;
import com.do_an.utt.model.ProductDTO;
import com.do_an.utt.model.ReviewDTO;
import com.do_an.utt.model.UserAddressDTO;
import com.do_an.utt.model.UserDTO;
import com.do_an.utt.model.UserPrincipal;
import com.do_an.utt.service.BillProductService;
import com.do_an.utt.service.BillService;
import com.do_an.utt.service.CommentService;
import com.do_an.utt.service.MailService;
import com.do_an.utt.service.ReviewService;
import com.do_an.utt.service.UserAddressService;
import com.do_an.utt.service.UserService;
import com.do_an.utt.utils.DateTimeUtils;

@Controller
public class MemberController {

	@Autowired
	UserAddressService userAddressService;

	@Autowired
	BillService billService;

	@Autowired
	BillProductService billProductService;

	@Autowired
	MailService mailService;

	@Autowired
	CommentService commentService;

	@Autowired
	ReviewService reviewService;
	
	@Autowired
	UserService userService;

	@GetMapping(value = "/member/account")
	public String MemberAccountGet() {
		return "client/account";
	}

	@GetMapping(value = "/member/account-address")
	public String MemberAccountAddressGet(Model model, HttpServletRequest request) {
		Integer page = request.getParameter("page") == null ? 1 : Integer.valueOf(request.getParameter("page"));
		List<UserAddressDTO> listUserAddressDTOs = userAddressService.getAll();

		model.addAttribute("listUserAddressDTOs", listUserAddressDTOs);
		return "client/account_address";
	}

	@GetMapping(value = "/member/account-address/new-address")
	public String MemberAccountAddAddressGet() {
		return "client/new_address";
	}

	@PostMapping(value = "/member/account-address/new-address")
	public String MemberAccountAddAddressPost(@ModelAttribute(value = "userAddressDTO") UserAddressDTO userAddressDTO) {
		userAddressService.add(userAddressDTO);
		return "redirect:/member/account-address";
	}

	@GetMapping(value = "/member/order")
	public String MemberOrderGet(HttpSession httpSession, Model model) {
		Object obj = httpSession.getAttribute("cart");
		UserPrincipal principal = (UserPrincipal) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		CouponDTO couponDTO = (CouponDTO) httpSession.getAttribute("coupon");

		BillDTO billDTO = new BillDTO();
		if (obj != null) {
			System.out.println("co hang trong gio hang");
			if (principal != null) {
				System.out.println("user da dang nhap");
				Map<Integer, BillProductDTO> map = (Map<Integer, BillProductDTO>) obj;

				// set id user de them vao bill
				UserDTO userDTO = new UserDTO();
				userDTO.setId(principal.getId());

				// tao bill

				billDTO.setBuyDate((java.sql.Date) DateTimeUtils.getDate());
				billDTO.setUserDTO(userDTO);// set user cho bill
				billDTO.setPay("Thanh Toán Khi nhận hàng");
				billDTO.setStatus("chờ xác nhận");

				billService.add(billDTO);

				long total = 0;

				try {
					for (Map.Entry<Integer, BillProductDTO> entry : map.entrySet()) {
						BillProductDTO billProductDTO = entry.getValue();
						System.out.println(billProductDTO.getId() + "|" + billProductDTO.getQuantity() + "|"
								+ billProductDTO.getUnitPrice());
						// them bill vao billProduct
						billProductDTO.setBillDTO(billDTO);

						// tao billProduct
						billProductService.add(billProductDTO);

						// tong gia tien
						total += billProductDTO.getQuantity() * billProductDTO.getUnitPrice();

						// cap nhat lai tong gia tien
						if (couponDTO != null) {
							System.out.println("coupon con han su dung");
							long totalCoupon = (long) (total * ((float) couponDTO.getPresent() / 100));
							System.out.println("Total update :" + totalCoupon);
							billDTO.setId(billProductDTO.getBillDTO().getId());
							billDTO.setPriceTotal(total + 5 + 2 + ((total - totalCoupon + 2 + 5) / 5) - totalCoupon);
							billDTO.setCoupon(couponDTO.getCode());
							billDTO.setCouponPresent(couponDTO.getPresent());
							billService.update(billDTO);
						} else if (couponDTO == null) {
							billDTO.setId(billProductDTO.getBillDTO().getId());
							billDTO.setPriceTotal(total);
							billService.update(billDTO);
						}

						httpSession.removeAttribute("cart");
						httpSession.removeAttribute("coupon");
					}
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		}

		int idBill = billDTO.getId();

		return "redirect:/member/bill";
	}

	@GetMapping(value = "/member/bill")
	public String MemberBillGet(Model model, HttpSession httpSession, HttpServletRequest request,
			@RequestParam(name = "page", defaultValue = "0", required = true) int page,
			@RequestParam(name = "perPage", defaultValue = "10", required = true) int perPage

	) {

		UserPrincipal currentUser = (UserPrincipal) SecurityContextHolder.getContext().getAuthentication()
				.getPrincipal();
		Long customerId = (long) currentUser.getId();

		List<BillDTO> listBillDTOs = billService.showAllBill(customerId, PageRequest.of(page, perPage));
		model.addAttribute("listBillDTOs", listBillDTOs);

		return "client/listbill";
	}

	@GetMapping(value = "/member/bill/detail") // id=?
	public String MemberBillGet(Model model, @RequestParam(name = "id") int idBill, HttpSession httpSession,
			HttpServletRequest request) {
		Integer page = request.getParameter("page") == null ? 1 : Integer.valueOf(request.getParameter("page"));
		System.out.println("id Bill " + idBill);
		List<BillProductDTO> listBillProductDTOs = billProductService.searchByBillId(idBill, page, page * 2);
		List<UserAddressDTO> listUserAddressDTOs = userAddressService.getAll();

		BillDTO billDTO = billService.get(idBill);

		long total = 0;
		for (BillProductDTO billProductDTO : listBillProductDTOs) {
			total += billProductDTO.getUnitPrice() * billProductDTO.getQuantity();
		}

		if (billDTO.getCoupon() != null) {
			long totalCoupon = (long) (total * ((float) billDTO.getCouponPresent() / 100));
			model.addAttribute("coupon", billDTO.getCoupon());
			model.addAttribute("totalCoupon", totalCoupon);
		}

		model.addAttribute("total", total);
		model.addAttribute("listBillProductDTOs", listBillProductDTOs);
		model.addAttribute("listUserAddressDTOs", listUserAddressDTOs);

		return "client/list_billProduct";
	}

	@PostMapping(value = "/member/comment")
	public String MemberCommentPost(HttpServletRequest request,
			@RequestParam(name = "comment", required = false) String comment,
			@RequestParam(name = "idP", required = false) int idP) {
		UserPrincipal principal = (UserPrincipal) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		System.out.println("comment :" + comment);
		CommentDTO commentDTO = new CommentDTO();
		commentDTO.setContent(comment);
//		commentDTO.setCreatedDate(DateTimeUtils.formatDate(new java.util.Date(), DateTimeUtils.DD_MM_YYYY));

		ProductDTO productDTO = new ProductDTO();
		productDTO.setId(idP);

		UserDTO userDTO = new UserDTO();
		userDTO.setId(principal.getId());

		commentDTO.setProductDTO(productDTO);
		commentDTO.setUserDTO(userDTO);

		commentService.add(commentDTO);

		return "redirect:/product-detail?id=" + idP;
	}

	@PostMapping(value = "/member/review")
	public String MemberReviewPost(HttpServletRequest request,
			@RequestParam(name = "review", required = false) String review,
			@RequestParam(name = "idP", required = false) int idP,
			@RequestParam(name = "rating", required = false) String rating) {
		UserPrincipal principal = (UserPrincipal) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		System.out.println("review :" + review);
		System.out.println("rating :" + rating);
		ReviewDTO reviewDTO = new ReviewDTO();
		reviewDTO.setStarNumber(Integer.valueOf(rating));

		ProductDTO productDTO = new ProductDTO();
		productDTO.setId(idP);
		reviewDTO.setProductDTO(productDTO);

		UserDTO userDTO = new UserDTO();
		userDTO.setId(principal.getId());
		reviewDTO.setUserDTO(userDTO);

		reviewService.add(reviewDTO);

		return "redirect:/product-detail?id=" + idP;
	}
	
	
	@GetMapping(value = "/member/user/edit")
	public String AdminEditCategoryGet(Model model) {
		UserPrincipal currentUser = (UserPrincipal) SecurityContextHolder.getContext().getAuthentication()
				.getPrincipal();
		 int id =  currentUser.getId();
		
		
		UserDTO userDTO = userService.get(id);
		model.addAttribute("userDTO", userDTO);
		return "client/register2";
	}

	@PostMapping(value = "/member/user/edit")
	public String AdminEditCategoryPost(@ModelAttribute(value = "userDTO") UserDTO userDTO) {
		userDTO.setRole("ROLE_MEMBER");
		userDTO.setEnabled(true);
		userService.update(userDTO);
		return "redirect:/login-member";
	}
}
