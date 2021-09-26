package com.do_an.utt.dao;

import java.util.List;

import com.do_an.utt.entity.Review;
import com.do_an.utt.model.SearchReviewDTO;


public interface ReviewDao {

	void add(Review review);

	void delete(Review review);

	void edit(Review review);

	Review getById(int id);

	List<Review> find(int productId);

	Long count(SearchReviewDTO searchReviewDTO);

	Long coutTotal(SearchReviewDTO searchReviewDTO);
}
