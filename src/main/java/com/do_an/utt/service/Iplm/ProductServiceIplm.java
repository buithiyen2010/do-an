package com.do_an.utt.service.Iplm;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.do_an.utt.dao.ProductDao;
import com.do_an.utt.dao.ProductDaoNative;
import com.do_an.utt.entity.Category;
import com.do_an.utt.entity.Product;
import com.do_an.utt.model.CategoryDTO;
import com.do_an.utt.model.ProductDTO;
import com.do_an.utt.service.ProductService;

@Service
@Transactional
public class ProductServiceIplm implements ProductService {

	@Autowired
	ProductDaoNative productDaoNative;

	@Autowired
	ProductDao productDao;

	@Override
	public void add(ProductDTO productDTO) {
		Product product = new Product();
		Category category = new Category();

		product.setName(productDTO.getName());
		product.setQuantity(productDTO.getQuantity());
		product.setPrice(productDTO.getPrice());
		product.setDescription(productDTO.getDescription());
		product.setImage(productDTO.getImage());
		product.setBestSeller(1l);
	    product.setCupon(productDTO.getCupon());
		
		category.setId(productDTO.getCategoryDTO().getId());
		category.setName(productDTO.getCategoryDTO().getName());

		product.setCategory(category);

		productDao.add(product);
	}

	@Override
	public void update(ProductDTO productDTO) {
		Category category = new Category();

		Product product = productDao.get(productDTO.getId());
		if (product != null) {
			product.setId(productDTO.getId());
			product.setName(productDTO.getName());
			product.setQuantity(productDTO.getQuantity());
			product.setPrice(productDTO.getPrice());
			product.setDescription(productDTO.getDescription());
			product.setImage(productDTO.getImage());
			product.setBestSeller(productDTO.getBestSeller());
			product.setCupon(productDTO.getCupon());

			category.setId(productDTO.getCategoryDTO().getId());
			product.setCategory(category);

			productDao.update(product);
		}

	}

	@Override
	public void delete(int id) {
		Product product = productDao.get(id);
		if (product != null) {
			productDao.delete(id);
		}
	}

	@Override
	public ProductDTO get(int id) {
		Product product = productDao.get(id);
		return convert(product);
	}

	@Override
	public List<ProductDTO> search(String name, int start, int length) {
		List<Product> listProducts = productDao.search(name, start, length);
		List<ProductDTO> listProductDTOs = new ArrayList<ProductDTO>();
		for (Product product : listProducts) {
			listProductDTOs.add(convert(product));
		}
		return listProductDTOs;
	}

	@Override
	public List<ProductDTO> getAll(int start, int length) {
		List<Product> listProducts = productDao.getAll(start, length);
		List<ProductDTO> listProductDTOs = new ArrayList<ProductDTO>();
		for (Product product : listProducts) {
			listProductDTOs.add(convert(product));
		}
		return listProductDTOs;
	}

	private ProductDTO convert(Product product) {
		ProductDTO productDTO = new ProductDTO();
		CategoryDTO categoryDTO = new CategoryDTO();

		productDTO.setId(product.getId());
		productDTO.setName(product.getName());
		productDTO.setQuantity(product.getQuantity());   
		if(product.getCupon()!= null) {
			
		
		productDTO.setPrice(  product.getPrice()-  product.getPrice()* product.getCupon()/100);
		}
		productDTO.setImage(product.getImage());
		productDTO.setDescription(product.getDescription());
		productDTO.setCupon(product.getCupon());
		
		productDTO.setBestSeller(product.getBestSeller());

		categoryDTO.setId(product.getCategory().getId());
		categoryDTO.setName(product.getCategory().getName());

		productDTO.setCategoryDTO(categoryDTO);
		return productDTO;
	}

	@Override
	public long countGetAll() {
		long count = productDao.countGetAll();
		return count;
	}

	@Override
	public long countSearch(String name) {
		long count = productDao.countSearch(name);
		return count;
	}

	@Override
	public List<ProductDTO> filterProduct(String nameCategory, long fromPrice, long toPrice, int start, int length) {
		List<Product> listProducts = productDao.filterProduct(nameCategory, fromPrice, toPrice, start, length);
		List<ProductDTO> listProductDTOs = new ArrayList<ProductDTO>();
		if (listProducts.isEmpty()) {
			System.out.println("service khong co san pham nao");
		} else {
			System.out.println("service co sp");
			for (Product product : listProducts) {
				listProductDTOs.add(convert(product));
			}
		}
		return listProductDTOs;
	}

	@Override
	public long countFilterProduct(String nameCategory, long fromPrice, long toPrice) {
		long count = productDao.countFilterProduct(nameCategory, fromPrice, toPrice);
		if (count == 0) {
			System.out.println("count khong co");
		} else {
			System.out.println("count co");
		}
		return count;
	}

	@Override
	public List<ProductDTO> getAllByCategory(String name, Pageable pageable) {

		List<Product> listProducts = productDaoNative.findProductByCategory(name, pageable);

		List<ProductDTO> listProductDTOs = new ArrayList<ProductDTO>();

		for (Product product : listProducts) {
			listProductDTOs.add(convert(product));
		}
		return listProductDTOs;

	}

	@Override
	public List<ProductDTO> getAllByCategoryId(Long id, Pageable pageable) {
		List<Product> listProducts = productDaoNative.findProductByCategory(id, pageable);

		List<ProductDTO> listProductDTOs = new ArrayList<ProductDTO>();

		for (Product product : listProducts) {
			listProductDTOs.add(convert(product));
		}
		return listProductDTOs;
	}

	@Override
	public Long countByCategory(Long id) {
		return productDaoNative.findProductByCategoryCount(id);
	}

	@Override
	public List<ProductDTO> getAllByName(String name, Pageable pageable) {
		List<Product> listProducts = productDaoNative.findProduct(name, pageable);

		List<ProductDTO> listProductDTOs = new ArrayList<ProductDTO>();

		for (Product product : listProducts) {
			listProductDTOs.add(convert(product));
		}
		return listProductDTOs;
	}

	@Override
	public Long countByCategory(String name) {
		return productDaoNative.findProductByName(name);
	}

	@Override
	public List<ProductDTO> getAllByName(Pageable pageable) {
		List<Product> listProducts = productDaoNative.findProductByCategory( pageable);

		List<ProductDTO> listProductDTOs = new ArrayList<ProductDTO>();

		for (Product product : listProducts) {
			listProductDTOs.add(convert(product));
		}
		return listProductDTOs;
	}

	@Override
	public Long countAll() {
		return productDaoNative.findProductByName();
	}

}
