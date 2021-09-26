package com.do_an.utt.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.do_an.utt.model.BillProductDTO;
import com.do_an.utt.model.ResponseDTO;

@Controller
@RequestMapping(value = "/staff")
public class CartItemController {
	
	
	@GetMapping(value = "/cart-item/delete/{productId}")
	public @ResponseBody String delCartItem(@PathVariable(name = "productId") Long id, HttpSession session) {
		Map<Long, BillProductDTO> map = (Map<Long, BillProductDTO>) session.getAttribute("cart");
		if (map != null) {
			map.remove(id);
			session.setAttribute("cart", map);
		}
		return "ok";
	}
	
	

	@PostMapping("/cart-item/get-cart-item-session")
	public @ResponseBody ResponseDTO<BillProductDTO> getCartItemsSession(HttpSession session) {
		ResponseDTO<BillProductDTO> responseDTO = new ResponseDTO<>();

		Map<Long, BillProductDTO> map = (Map<Long, BillProductDTO>) session.getAttribute("cart");
		if (map != null) {
			List<BillProductDTO> list = new ArrayList<>(map.values());
			responseDTO.setData(list);
//			responseDTO.setRecordsTotal(list.size());
//			responseDTO.setRecordsFiltered(list.size());
		} else {
			responseDTO.setData(new ArrayList<>());
//			responseDTO.setRecordsTotal(0);
//			responseDTO.setRecordsFiltered(0);
		}

		return responseDTO;
	}

	@PutMapping("/cart-item/update")
	public @ResponseBody String updateCartItem(HttpSession session, @RequestParam(name = "pId") Long pId,
			@RequestParam(name = "quantity") int quantity) {
		Map<Long, BillProductDTO> map = (Map<Long, BillProductDTO>) session.getAttribute("cart");
		if (map != null) {
			BillProductDTO item = map.get(pId);
			if (item != null) {
				item.setQuantity(quantity);
			}
			session.setAttribute("cart", map);
		}
		return "ok";
	}

}
