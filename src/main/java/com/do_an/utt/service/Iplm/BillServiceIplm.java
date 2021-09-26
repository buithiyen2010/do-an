package com.do_an.utt.service.Iplm;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.do_an.utt.dao.BillDao;
import com.do_an.utt.dao.BillRestaurantDAO;
import com.do_an.utt.entity.Bill;
import com.do_an.utt.entity.User;
import com.do_an.utt.model.BillDTO;
import com.do_an.utt.model.BillProductDTO;
import com.do_an.utt.model.UserDTO;
import com.do_an.utt.service.BillService;
import com.do_an.utt.utils.DateTimeUtils;

@Service
@Transactional
public class BillServiceIplm implements BillService {
	@Autowired
	BillDao billDao;

	@Autowired
	private BillRestaurantDAO billRestaurantDAO;

	DateTimeUtils dateTimeUtils = new DateTimeUtils();

	@Override
	public void add(BillDTO billDTO) {
		Bill bill = new Bill();

		bill.setBuyDate(billDTO.getBuyDate());
		bill.setBuyer(new User(billDTO.getUserDTO().getId()));
		bill.setStatus(billDTO.getStatus());
		bill.setPriceTotal(billDTO.getPriceTotal());
		bill.setPay(billDTO.getPay());
		bill.setCoupon(billDTO.getCoupon());
		bill.setCouponPresent(billDTO.getCouponPresent());

		billDao.add(bill);
		billDTO.setId(bill.getId());
	}

	@Override
	public void update(BillDTO billDTO) {

		Bill bill = billDao.get(billDTO.getId());
		if (bill != null) {
			System.out.println("update duoc bill");
			bill.setPriceTotal(billDTO.getPriceTotal());
			bill.setCoupon(billDTO.getCoupon());
			bill.setCouponPresent(billDTO.getCouponPresent());
			bill.setStatus(billDTO.getStatus());

			billDao.update(bill);
		} else {
			System.out.println("khong update duoc bill");
		}

	}

	@Override
	public void delete(int id) {
		Bill bill = billDao.get(id);
		if (bill != null) {
			billDao.delete(id);
		}

	}

	@Override
	public BillDTO get(int id) {
		Bill bill = billDao.get(id);
		return convertDTO(bill);
	}

	@Override
	public List<BillDTO> searchByBuyerId(int buyerId, int start, int length) {
		List<Bill> listBills = billDao.searchByBuyerId(buyerId, start, length);
		List<BillDTO> listBillDTOs = new ArrayList<BillDTO>();
		for (Bill bill : listBills) {
			listBillDTOs.add(convertDTO(bill));
		}
		return listBillDTOs;
	}

	@Override
	public List<BillDTO> searchByNameBuyer(String nameBuyer, int start, int length) {
		List<Bill> listBills = billDao.searchByNameBuyer(nameBuyer, start, length);
		List<BillDTO> listBillDTOs = new ArrayList<BillDTO>();
		for (Bill bill : listBills) {
			listBillDTOs.add(convertDTO(bill));
		}
		return listBillDTOs;
	}

	@Override
	public List<BillDTO> showAllBill(int start, int length) {
		List<Bill> listBills = billDao.showAllBill(start, length);
		List<BillDTO> listBillDTOs = new ArrayList<BillDTO>();
		for (Bill bill : listBills) {
			listBillDTOs.add(convertDTO(bill));
		}
		return listBillDTOs;
	}

	private BillDTO convertDTO(Bill bill) {
		BillDTO billDTO = new BillDTO();
		billDTO.setId(bill.getId());
		billDTO.setBuyDate(bill.getBuyDate());
		billDTO.setPriceTotal(bill.getPriceTotal());
		billDTO.setCoupon(bill.getCoupon());
		billDTO.setCouponPresent(bill.getCouponPresent());
		billDTO.setPay(bill.getPay());
		billDTO.setStatus(bill.getStatus());
		

		UserDTO userDTO = new UserDTO();
		userDTO.setId(bill.getBuyer().getId());
		userDTO.setAddress(bill.getBuyer().getAddress());
		userDTO.setName(bill.getBuyer().getName());
		userDTO.setPhone(bill.getBuyer().getPhone());

		billDTO.setUserDTO(userDTO);

		return billDTO;
	}

	@Override
	public long countSearchByNameBuyer(String nameBuyer) {
		long count = billDao.countSearchByNameBuyer(nameBuyer);
		return count;
	}

	@Override
	public long countSearchByBuyerId(int buyerId) {
		long count = billDao.countSearchByBuyerId(buyerId);
		return count;
	}

	@Override
	public long countShowAllBill() {
		long count = billDao.countShowAllBill();
		return count;
	}

	@Override
	public void changeStatus(BillDTO billDTO) {
		Bill bill = billDao.get(billDTO.getId());
		if (bill != null) {
			bill.setStatus(billDTO.getStatus());
			billDao.update(bill);
		}
	}

	@Override
	public List<BillDTO> searchByNameBuyer(String name, String status, String to, String from,
			PageRequest pageRequest) {

		List<BillDTO> listBillDTOs = new ArrayList<BillDTO>();
		if (from.equals("") && to.equals("")) {
			List<Bill> listBills = billRestaurantDAO.findBill(name, status, pageRequest);
			for (Bill bill : listBills) {
				listBillDTOs.add(convertDTO(bill));
			}
		} else if (from.equals("")) {
			List<Bill> listBills2 = billRestaurantDAO.findBill(name, status, to, pageRequest);
			for (Bill bill : listBills2) {
				listBillDTOs.add(convertDTO(bill));
			}
		} else {
			List<Bill> listBills1 = billRestaurantDAO.findBill(name, status, to, from, pageRequest);

			for (Bill bill : listBills1) {
				listBillDTOs.add(convertDTO(bill));
			}
		}
		return listBillDTOs;
	}

	@Override
	public long countSearchByNameBuyer(String nanme, String status, String to, String from) {

		if (from.equals("") && to.equals("")) {
			return billRestaurantDAO.countBill(nanme, status);
		} else if (from.equals("")) {
			return billRestaurantDAO.countBill(nanme, status, to);
		} else {
			return billRestaurantDAO.countBill(nanme, status, to, from);
		}
	}

	@Override
	public List<BillDTO> showAllBill(Long id, PageRequest pageRequest) {
		List<Bill> listBills = billRestaurantDAO.findBill(id, pageRequest);
		List<BillDTO> listBillDTOs = new ArrayList<BillDTO>();
		for (Bill bill : listBills) {
			listBillDTOs.add(convertDTO(bill));
		}
		return listBillDTOs;
	}

	@Override
	public Long Sumbill(String nanme, String status, String to, String from) {
		
		if (from.equals("") && to.equals("")) {
			return billRestaurantDAO.Sumbill(nanme, status);
		} else if (from.equals("")) {
			return billRestaurantDAO.Sumbill(nanme, status, to);
		} else {
			return billRestaurantDAO.Sumbill(nanme, status, to, from);
		
		}
	}

}
