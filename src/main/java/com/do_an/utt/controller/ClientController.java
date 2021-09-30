package com.do_an.utt.controller;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.do_an.utt.model.BillProductDTO;
import com.do_an.utt.model.CategoryDTO;
import com.do_an.utt.model.CouponDTO;
import com.do_an.utt.model.ProductDTO;
import com.do_an.utt.model.UserAddressDTO;
import com.do_an.utt.model.UserDTO;
import com.do_an.utt.service.CategoryService;
import com.do_an.utt.service.CommentService;
import com.do_an.utt.service.CouponService;
import com.do_an.utt.service.ProductService;
import com.do_an.utt.service.ReviewService;
import com.do_an.utt.service.UserAddressService;
import com.do_an.utt.service.UserService;
import com.do_an.utt.utils.DateTimeUtils;

@Controller
public class ClientController {
	@Autowired
	private ProductService productService;

	@Autowired
	private CouponService couponService;

	@Autowired
	private CategoryService categoryService;

	@Autowired
	private UserAddressService userAddressService;

	@Autowired
	private CommentService commentService;

	@Autowired
	private ReviewService reviewService;

	@Autowired
	private UserService userService;
	
	@ModelAttribute("categories")
	public List<CategoryDTO> getCategories() {
		 return categoryService.getAll(0, 10);
	}

	@GetMapping(value = "/index")
	public String ClientIndexGet(HttpServletRequest request,
			@RequestParam(name = "name", required = false) String name1,
			@RequestParam(name = "page", required = false, defaultValue = "0") int page,
			@RequestParam(name = "perpage", required = false, defaultValue = "8") int perpage) {

		name1 = "SÁCH MỚI PHÁT HÀNH";
		String name2 = "SÁCH BÁN CHẠY BEST SELLER";
		String name3 = "SÁCH THIẾU NHI";
		String name4 = "SÁCH NUÔI DẠY CON";
		String name5 = "SÁCH DOANH NHÂN KINH TẾ KHỞI NGHIỆP";
		String name6 = "GIAN HÀNG TIỆM DƯA HẤU";


		List<ProductDTO> listProductDTOs1 = productService.getAllByCategory(name1, PageRequest.of(page, perpage));

		List<ProductDTO> listProductDTOs2 = productService.getAllByCategory(name2, PageRequest.of(page, perpage));

		List<ProductDTO> listProductDTOs3 = productService.getAllByCategory(name3, PageRequest.of(page, perpage));

		List<ProductDTO> listProductDTOs4 = productService.getAllByCategory(name4, PageRequest.of(page, perpage));

		List<ProductDTO> listProductDTOs5 = productService.getAllByCategory(name5, PageRequest.of(page, perpage));

		List<ProductDTO> listProductDTOs6 = productService.getAllByCategory(name6, PageRequest.of(page, perpage));

		request.setAttribute("listProductDTOs1", listProductDTOs1);
		request.setAttribute("listProductDTOs2", listProductDTOs2);
		request.setAttribute("listProductDTOs3", listProductDTOs3);
		request.setAttribute("listProductDTOs4", listProductDTOs4);
		request.setAttribute("listProductDTOs5", listProductDTOs5);
		request.setAttribute("listProductDTOs6", listProductDTOs6);

		return "client/index";
	}

	@GetMapping(value = "/listproduct-search-by-category")
	public String ClientIndexGet2(HttpServletRequest request, @RequestParam(name = "id", required = false) Long id,
			@RequestParam(name = "page", required = false, defaultValue = "0") int page,
			@RequestParam(name = "perpage", required = false, defaultValue = "8") int perpage) {

		List<ProductDTO> listProductDTOs1 = productService.getAllByCategoryId(id, PageRequest.of(page, perpage));
		
		List<CategoryDTO> listCategory = categoryService.getAll(page, perpage);
		request.setAttribute("listCategory", listCategory);
		
		CategoryDTO CategoryDTO = categoryService.get(id);
		request.setAttribute("CategoryDTO", CategoryDTO);
		
		request.setAttribute("listProductDTOs1", listProductDTOs1);
		request.setAttribute("listCategory", listCategory);

		
		Long count = productService.countByCategory(id);
		double result = Math.ceil((double) count/8);
		
		
		request.setAttribute("result", result);
		request.setAttribute("currentPage", page);
		request.setAttribute("id", id);
		
		
		return "client/list-search-by-category";
		
		
		
	}

	@GetMapping(value = "/listproduct-search")
	public String ClientIndexGet1(
			HttpServletRequest request, @RequestParam(name = "name", required = false) String name,
			@RequestParam(name = "page", required = false, defaultValue = "0") int page,
			@RequestParam(name = "perpage", required = false, defaultValue = "8") int perpage
			) {

		List<ProductDTO> listProductDTOs1 = productService.getAllByName(name, PageRequest.of(page, perpage));
		
		List<CategoryDTO> listCategory = categoryService.getAll(page, perpage);
		request.setAttribute("listCategory", listCategory);
		
		
		request.setAttribute("listProductDTOs1", listProductDTOs1);
		request.setAttribute("listCategory", listCategory);

		
		Long count = productService.countByCategory(name);
		double result = Math.ceil((double) count/8);
//		
		
		request.setAttribute("result", result);
		request.setAttribute("currentPage", page);
		request.setAttribute("name", name);
//		request.setAttribute("id", id);
		
		
		return "client/list-search-by-product";
		
		
		
	}

	@GetMapping(value = "/login-member")
	public String ClientLoginGet(Model model, @RequestParam(name = "e", required = false) String error,
			@RequestParam(name = "currentPage", required = false) String currentPage) {
		if (error != null) {
			System.out.println("Co loi xay ra");
			model.addAttribute("error", error);
		}

		return "client/login";
	}

	@GetMapping(value = "/register")
	public String register() {
		return "client/register";
	}

	@PostMapping(value = "/register")
	public String register(Model model, @ModelAttribute(value = "userDTO") UserDTO userDTO) {

		userDTO.setEnabled(true);
		userDTO.setRole("ROLE_MEMBER");
		userService.add(userDTO);

		return "redirect:/login-member";
	}

	@PostMapping(value = "/login-member")
	public String ClientLoginGet(Model model,
			@RequestParam(name = "currentPage", required = false) String currentPage) {
		System.out.println("ohoh");
		if (currentPage != null) {
			System.out.println("forward page checkout");
			return "redirect:/checkout";
		}

		return "redirect:/index";
	}

	@GetMapping(value = "/product-detail")
	public String ClientDetailProductGet(HttpServletRequest request, @RequestParam(value = "id") int id) {

		ProductDTO productDTO = productService.get(id);
		request.setAttribute("productDTO", productDTO);

		int page = 0;
		int perpage = 8;

		String name1 = "SÁCH MỚI PHÁT HÀNH";
		String name2 = "SÁCH BÁN CHẠY BEST SELLER";
		String name3 = "SÁCH THIẾU NHI";
		String name4 = "SÁCH NUÔI DẠY CON";
		String name5 = "SÁCH DOANH NHÂN KINH TẾ KHỞI-NGHIỆP";
		String name6 = "GIAN HÀNG TIỆM DƯA HẤU";

		List<ProductDTO> listProductDTOs1 = productService.getAllByCategory(name1, PageRequest.of(page, perpage));

		List<ProductDTO> listProductDTOs2 = productService.getAllByCategory(name2, PageRequest.of(page, perpage));

		List<ProductDTO> listProductDTOs3 = productService.getAllByCategory(name3, PageRequest.of(page, perpage));

		List<ProductDTO> listProductDTOs4 = productService.getAllByCategory(name4, PageRequest.of(page, perpage));

		List<ProductDTO> listProductDTOs5 = productService.getAllByCategory(name5, PageRequest.of(page, perpage));

		List<ProductDTO> listProductDTOs6 = productService.getAllByCategory(name6, PageRequest.of(page, perpage));

		request.setAttribute("listProductDTOs1", listProductDTOs1);
		request.setAttribute("listProductDTOs2", listProductDTOs2);
		request.setAttribute("listProductDTOs3", listProductDTOs3);
		request.setAttribute("listProductDTOs4", listProductDTOs4);
		request.setAttribute("listProductDTOs5", listProductDTOs5);
		request.setAttribute("listProductDTOs6", listProductDTOs6);

		return "client/product-detail";
	}

	@GetMapping(value = "/add-to-cart")
	public String ClientAddToCartGet(HttpSession httpSession, @RequestParam(value = "id") int id, RedirectAttributes redirectAttrs) {
		System.out.println("add-to-cart get:id" + id);
		ProductDTO productDTO = productService.get(id);
		if (productDTO != null) {
			System.out.println("co san pham");
		} else {
			System.out.println("khong co san pham");
		}
		Object object = httpSession.getAttribute("cart");

		// gio hang chong
		if (object == null) {
			// tao mat hang
			BillProductDTO billProductDTO = new BillProductDTO();

			billProductDTO.setProductDTO(productDTO);
			billProductDTO.setUnitPrice(productDTO.getPrice());
			billProductDTO.setQuantity(1);

			// them product vao gio hang
			Map<Integer, BillProductDTO> map = new HashMap<>();
			map.put(id, billProductDTO);

			httpSession.setAttribute("cart", map);
		}
		// neu gio hang da co mat hang
		else {
			Map<Integer, BillProductDTO> map = (Map<Integer, BillProductDTO>) object;
			BillProductDTO billProductDTO = map.get(id);

			if (billProductDTO == null) {
				billProductDTO = new BillProductDTO();
				billProductDTO.setProductDTO(productDTO);
				billProductDTO.setQuantity(1);
				billProductDTO.setUnitPrice(productDTO.getPrice());

				map.put(id, billProductDTO);
			} else {
				ProductDTO product = productService.get(id);
				billProductDTO.setQuantity(billProductDTO.getQuantity() + 1);
				if (product.getQuantity() <= billProductDTO.getQuantity()) {
					// Nếu vượt quá số lượng trong kho
					redirectAttrs.addFlashAttribute("msg", "Vượt quá số lượng sản phẩm trong kho. Mua tối đa " + (billProductDTO.getProductDTO().getQuantity() - 1));
					billProductDTO.setQuantity(product.getQuantity() - 1);
				}
			}

			httpSession.setAttribute("cart", map);
		}

		return "redirect:/cart";
	}

	@PostMapping(value = "/add-to-cart")
	public String ClientAddToCartPost(HttpSession httpSession, @RequestParam(value = "id") int id,
			@RequestParam(value = "product_quantity") int product_quantity) {
		System.out.println("add-to-cart post:id" + id);

		ProductDTO productDTO = productService.get(id);
		Object object = httpSession.getAttribute("cart");

		if (object == null) {
			// tao mat hang
			BillProductDTO billProductDTO = new BillProductDTO();

			billProductDTO.setProductDTO(productDTO);
			billProductDTO.setUnitPrice(productDTO.getPrice());
			billProductDTO.setQuantity(product_quantity);

			// them product vao gio hang
			Map<Integer, BillProductDTO> map = new HashMap<>();
			map.put(id, billProductDTO);

			httpSession.setAttribute("cart", map);
		} else {
			Map<Integer, BillProductDTO> map = (Map<Integer, BillProductDTO>) object;
			BillProductDTO billProductDTO = map.get(id);

			if (billProductDTO == null) {
				billProductDTO = new BillProductDTO();
				billProductDTO.setProductDTO(productDTO);
				billProductDTO.setQuantity(product_quantity);
				billProductDTO.setUnitPrice(productDTO.getPrice());

				map.put(id, billProductDTO);
			} else {
				billProductDTO.setQuantity(billProductDTO.getQuantity() + product_quantity);
			}

			httpSession.setAttribute("cart", map);
		}

		return "redirect:/cart";
	}
	
	@PostMapping(value = "/cart-remove")
	public String MemberRemoveCart(HttpSession httpSession, @RequestParam(value = "id") Integer id) {
		Object object = httpSession.getAttribute("cart");
		if (object != null) {
			Map<Integer, BillProductDTO> map = (Map<Integer, BillProductDTO>) object;
			if(map.containsKey(id)) {
				map.remove(id);
				httpSession.setAttribute("cart", map);
			}
		}

		return "redirect:/cart";
	}

	@PostMapping(value = "/cart-update")
	public String MemberUpdateCart(HttpSession httpSession, 
			@RequestParam(value = "id") Integer id, 
			@RequestParam(value = "quantity") int quantity,
			RedirectAttributes redirectAttrs) {
		Object object = httpSession.getAttribute("cart");
		if (object != null) {
			Map<Integer, BillProductDTO> map = (Map<Integer, BillProductDTO>) object;
			BillProductDTO billProductDTO = map.get(id);

			if (billProductDTO != null) {
				ProductDTO product = productService.get(id);
				if (product.getQuantity() <= quantity) {
					redirectAttrs.addFlashAttribute("msg", "Vượt quá số lượng sản phẩm trong kho. Mua tối đa " + (billProductDTO.getProductDTO().getQuantity() - 1));
					billProductDTO.setQuantity(product.getQuantity() - 1);
				} else {
					billProductDTO.setQuantity(quantity);
				}
			}

			httpSession.setAttribute("cart", map);
		}

		return "redirect:/cart";
	}

	@GetMapping(value = "/cart")
	public String ClientCartGet(HttpSession httpSession, Model model) {
		Object obj = httpSession.getAttribute("cart");
		CouponDTO couponDTO = (CouponDTO) httpSession.getAttribute("coupon");
		if (obj != null) {
			int total = 0;
			Map<Integer, BillProductDTO> map = (Map<Integer, BillProductDTO>) obj;

			for (Map.Entry<Integer, BillProductDTO> entry : map.entrySet()) {
				BillProductDTO billProductDTO = entry.getValue();

				total += billProductDTO.getQuantity() * billProductDTO.getUnitPrice();

				if (couponDTO != null) {
					int totalUpdate = (int) (total - (total * ((float) couponDTO.getPresent() / 100)));
					System.out.println("Total update:" + totalUpdate);
					model.addAttribute("total", totalUpdate);
				} else {
					model.addAttribute("total", total);
				}
			}
		}
		return "client/cart";
	}

	@GetMapping(value = "/checkout")
	public String ClientCheckoutGet(HttpSession httpSession, Model model, HttpServletRequest request) {

		Object obj = httpSession.getAttribute("cart");
		CouponDTO couponDTO = (CouponDTO) httpSession.getAttribute("coupon");
		int total = 0;
		if (obj != null) {
			List<UserAddressDTO> listUserAddressDTOs = userAddressService.getAll();

			Map<Integer, BillProductDTO> map = (Map<Integer, BillProductDTO>) obj;

			for (Map.Entry<Integer, BillProductDTO> entry : map.entrySet()) {
				BillProductDTO billProductDTO = entry.getValue();

				total += billProductDTO.getQuantity() * billProductDTO.getUnitPrice();
			}

			System.out.println("total :" + total);
			if (couponDTO != null) {
				int totalCoupon = (int) (total * ((float) couponDTO.getPresent() / 100));

				model.addAttribute("total", total);
				model.addAttribute("totalCoupon", totalCoupon);
				model.addAttribute("listUserAddressDTOs", listUserAddressDTOs);
			} else {
				model.addAttribute("total", total);
				model.addAttribute("listUserAddressDTOs", listUserAddressDTOs);
			}
		}

		return "client/checkout_page";
	}

	@PostMapping(value = "/coupon")
	public String ClientCouponGet(@RequestParam(value = "coupon") String coupon, HttpSession httpSession) {
		CouponDTO couponDTO = couponService.getByCode(coupon);
		if (couponDTO != null) {
			if (DateTimeUtils.parseDate(couponDTO.getExpiredDate(), DateTimeUtils.DD_MM_YYYY).after(new Date())) {
				System.out.println("Coupon con han su dung");
				httpSession.setAttribute("coupon", couponDTO);
			} else {
				System.out.println("coupon het han su dung");
			}
		}
		return "redirect:/cart";
	}

	@GetMapping(value = "/list-product")
	public String ClientFilterProductPost(HttpServletRequest request,
			@RequestParam(value = "nameCategory", required = false) String nameCategory,
			@RequestParam(value = "priceProduct", required = false) String priceProduct) {
		System.out.println("nameC " + nameCategory);
		System.out.println("priceC " + priceProduct);
		Integer page = request.getParameter("page") == null ? 1 : Integer.valueOf(request.getParameter("page"));
		System.out.println("page curent :" + page);
		long count = 0;

		List<CategoryDTO> listCategoryDTOs = categoryService.getAll(0, 50);
		if (priceProduct != null && priceProduct.equals("default")) {
			List<ProductDTO> listProductDTOs = productService.filterProduct(nameCategory, 0, 10000, (page - 1) * 9, 9);
			if (listCategoryDTOs.isEmpty()) {
				System.out.println("khong tim thay");
			} else {
				System.out.println("co tim thay");
				request.setAttribute("listProductDTOs", listProductDTOs);
			}
			count = productService.countFilterProduct(nameCategory, 0, 10000);
		} else if (priceProduct != null && priceProduct.equals("smaller1")) {
			List<ProductDTO> listProductDTOs = productService.filterProduct(nameCategory, 0, 100, (page - 1) * 9, 9);
			if (listCategoryDTOs.isEmpty()) {
				System.out.println("khong tim thay");
			} else {
				System.out.println("co tim thay");
				request.setAttribute("listProductDTOs", listProductDTOs);
			}
			count = productService.countFilterProduct(nameCategory, 0, 100);
		} else if (priceProduct != null && priceProduct.equals("between1and2")) {
			List<ProductDTO> listProductDTOs = productService.filterProduct(nameCategory, 100, 200, (page - 1) * 9, 9);
			if (listCategoryDTOs.isEmpty()) {
				System.out.println("khong tim thay");
			} else {
				System.out.println("co tim thay");
				request.setAttribute("listProductDTOs", listProductDTOs);
			}
			count = productService.countFilterProduct(nameCategory, 100, 200);
		} else if (priceProduct != null && priceProduct.equals("between2and3")) {
			System.out.println("xay ra 2-3");
			count = productService.countFilterProduct(nameCategory, 200, 300);
			List<ProductDTO> listProductDTOs = productService.filterProduct(nameCategory, 200, 300, (page - 1) * 9, 9);
			if (listCategoryDTOs.isEmpty()) {
				System.out.println("khong tim thay23");
			} else if (listCategoryDTOs.size() > 0) {
				System.out.println("co tim thay23");
				request.setAttribute("listProductDTOs", listProductDTOs);
			}
		} else if (priceProduct != null && priceProduct.equals("between3and4")) {
			List<ProductDTO> listProductDTOs = productService.filterProduct(nameCategory, 300, 400, (page - 1) * 9, 9);
			if (listCategoryDTOs.isEmpty()) {
				System.out.println("khong tim thay");
			} else {
				System.out.println("co tim thay");
				request.setAttribute("listProductDTOs", listProductDTOs);
			}
			count = productService.countFilterProduct(nameCategory, 300, 400);
		} else if (priceProduct != null && priceProduct.equals("between4and5")) {
			List<ProductDTO> listProductDTOs = productService.filterProduct(nameCategory, 400, 500, (page - 1) * 9, 9);
			if (listCategoryDTOs.isEmpty()) {
				System.out.println("khong tim thay");
			} else {
				System.out.println("co tim thay");
				request.setAttribute("listProductDTOs", listProductDTOs);
			}
			count = productService.countFilterProduct(nameCategory, 400, 500);
		} else if (priceProduct != null && priceProduct.equals("biger5")) {
			List<ProductDTO> listProductDTOs = productService.filterProduct(nameCategory, 500, 10000, (page - 1) * 9,
					9);
			if (listCategoryDTOs.isEmpty()) {
				System.out.println("khong tim thay");
			} else {
				System.out.println("co tim thay");
				request.setAttribute("listProductDTOs", listProductDTOs);
			}
			count = productService.countFilterProduct(nameCategory, 500, 10000);
		} else {
			List<ProductDTO> listProductDTOs = productService.getAll((page - 1) * 9, 9);
			request.setAttribute("listProductDTOs", listProductDTOs);
			count = productService.countGetAll();
		}
		request.setAttribute("listCategoryDTOs", listCategoryDTOs);

		double result = Math.ceil((double) count / 9);
		request.setAttribute("result", result);
		request.setAttribute("currentPage", page);

		return "client/category_page";
	}
}
