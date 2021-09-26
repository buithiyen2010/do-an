package com.do_an.utt.service.Iplm;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.do_an.utt.dao.ReviewDao;
import com.do_an.utt.entity.Product;
import com.do_an.utt.entity.Review;
import com.do_an.utt.entity.User;
import com.do_an.utt.model.ProductDTO;
import com.do_an.utt.model.ReviewDTO;
import com.do_an.utt.model.SearchReviewDTO;
import com.do_an.utt.model.UserDTO;
import com.do_an.utt.service.ReviewService;
import com.do_an.utt.utils.DateTimeUtils;

@Transactional
@Service
public class ReviewServiceImpl implements ReviewService {

	@Autowired
	private ReviewDao reviewDao;

	@Override
	public void add(ReviewDTO reviewDTO) {
		Review review=new Review();
		review.setReviewDate(new Date());
		review.setStarNumBer(reviewDTO.getStarNumber());
		review.setProduct(new Product(reviewDTO.getProductDTO().getId()));
		User user= new User();
		user.setName(reviewDTO.getUserDTO().getName());
		user.setId(reviewDTO.getUserDTO().getId());
		review.setUser(user);
		reviewDao.add(review);

	}

	@Override
	public void delete(int id) {
		Review review = reviewDao.getById(id);
		if (review != null) {
			reviewDao.delete(review);
		}

	}

	@Override
	public void edit(ReviewDTO reviewDTO) {
		Review review = reviewDao.getById(reviewDTO.getId());
		if (review != null) {
			review.setStarNumBer(reviewDTO.getStarNumber());
			review.setProduct(new Product(reviewDTO.getProductDTO().getId()));
			User user= new User();
			user.setName(reviewDTO.getUserDTO().getName());
			review.setUser(user);
		}
		reviewDao.edit(review);
	}

	@Override
	public ReviewDTO getById(int id) {
		Review review = reviewDao.getById(id);
		if (review != null) {
			convert(review);
		}
		return null;
	}

	private ReviewDTO convert(Review review) {
		ReviewDTO reviewDTO = new ReviewDTO();
		reviewDTO.setId(review.getId());
		reviewDTO.setReviewDate(DateTimeUtils.formatDate(review.getReviewDate(), DateTimeUtils.DD_MM_YYYY_HH_MM));
		reviewDTO.setStarNumber(review.getStarNumBer());
		ProductDTO productDTO= new ProductDTO();
		productDTO.setId(review.getProduct().getId());
		reviewDTO.setProductDTO(productDTO);
		UserDTO userDTO= new UserDTO();
		userDTO.setName(review.getUser().getName());
		reviewDTO.setUserDTO(userDTO);
		return reviewDTO;
	}

	@Override
	public List<ReviewDTO> find(int productId) {
		List<Review> reviews = reviewDao.find(productId);
		List<ReviewDTO> reviewDTOs = new ArrayList<ReviewDTO>();
		reviews.forEach(rev -> {
			reviewDTOs.add(convert(rev));
		});
		return reviewDTOs;
	}

	@Override
	public Long count(SearchReviewDTO searchReviewDTO) {

		return reviewDao.count(searchReviewDTO);
	}

	@Override
	public Long coutTotal(SearchReviewDTO searchReviewDTO) {

		return reviewDao.count(searchReviewDTO);
	}

}
