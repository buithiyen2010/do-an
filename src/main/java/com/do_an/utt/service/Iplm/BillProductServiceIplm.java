package com.do_an.utt.service.Iplm;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.do_an.utt.dao.BillProductDao;
import com.do_an.utt.dao.ProductDao;
import com.do_an.utt.entity.Bill;
import com.do_an.utt.entity.BillProduct;
import com.do_an.utt.entity.Product;
import com.do_an.utt.model.BillDTO;
import com.do_an.utt.model.BillProductDTO;
import com.do_an.utt.model.ProductDTO;
import com.do_an.utt.service.BillProductService;

@Transactional
@Service
public class BillProductServiceIplm implements BillProductService {

	@Autowired
	BillProductDao billProductDao;

	@Autowired
	private ProductDao productDao;

	@Override
	public void add(BillProductDTO billProductDTO) {
		BillProduct billProduct = new BillProduct();

		billProduct.setQuantity(billProductDTO.getQuantity());
		billProduct.setUnitPrice(billProductDTO.getUnitPrice());

		Bill bill = new Bill();
		bill.setId(billProductDTO.getBillDTO().getId());

		Product product = new Product();
		product.setId(billProductDTO.getProductDTO().getId());

		Product product1 = productDao.get(billProductDTO.getProductDTO().getId());
		product1.setBestSeller(product1.getBestSeller() + billProductDTO.getQuantity());
		
		product1.setQuantity(product1.getQuantity() - billProductDTO.getQuantity());
		productDao.update(product1);

		billProduct.setBill(bill);
		billProduct.setProduct(product);

		billProductDao.add(billProduct);
//		billProductDTO.setId(billProduct.getId());
	}

	@Override
	public void update(BillProductDTO billProductDTO) {
		BillProduct billProduct = new BillProduct();

		billProduct.setQuantity(billProductDTO.getQuantity());
		billProduct.setUnitPrice(billProductDTO.getUnitPrice());

		Bill bill = new Bill();
		bill.setId(billProductDTO.getBillDTO().getId());

		Product product = new Product();
		product.setId(billProductDTO.getProductDTO().getId());

		billProduct.setBill(bill);
		billProduct.setProduct(product);

		billProductDao.update(billProduct);
	}

	@Override
	public void delete(int id) {
		BillProduct billProduct = billProductDao.get(id);
		if (billProduct != null) {
			billProductDao.delete(id);
		}

	}

	@Override
	public BillProductDTO get(int id) {
		BillProduct billProduct = billProductDao.get(id);
		return convert(billProduct);
	}

	@Override
	public List<BillProductDTO> searchByBillId(int idBill, int start, int length) {
		List<BillProduct> listBillProducts = billProductDao.searchByBillId(idBill, start, length);
		List<BillProductDTO> listBillProductDTOs = new ArrayList<BillProductDTO>();
		for (BillProduct billProduct : listBillProducts) {
			listBillProductDTOs.add(convert(billProduct));
		}
		return listBillProductDTOs;
	}

	private BillProductDTO convert(BillProduct billProduct) {
		BillProductDTO billProductDTO = new BillProductDTO();

		billProductDTO.setId(billProduct.getId());
		billProductDTO.setQuantity(billProduct.getQuantity());
		billProductDTO.setUnitPrice(billProduct.getUnitPrice());

		BillDTO billDTO = new BillDTO();
		billDTO.setId(billProduct.getBill().getId());

		ProductDTO productDTO = new ProductDTO();
		productDTO.setId(billProduct.getProduct().getId());
		productDTO.setName(billProduct.getProduct().getName());

		billProductDTO.setBillDTO(billDTO);
		billProductDTO.setProductDTO(productDTO);

		return billProductDTO;
	}

	@Override
	public long countSearchByBillId(int idBill) {
		long count = billProductDao.countSearchByBillId(idBill);
		return count;
	}
}
