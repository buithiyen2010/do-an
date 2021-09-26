package com.do_an.utt.service.Iplm;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import com.do_an.utt.dao.PostDao;
import com.do_an.utt.entity.Post;
import com.do_an.utt.model.PostDTO;
import com.do_an.utt.service.PostService;
import com.do_an.utt.utils.DateTimeUtils;

@Transactional
@Service
public class PostServiceImpl implements PostService {

	@Autowired
	private PostDao postDao;

	@Override
	public void add(PostDTO postDTO) {

		Post post = new Post();
		post.setImage(postDTO.getImage());
		post.setName(postDTO.getName());
		post.setDescription(postDTO.getDescription());
		post.setType(postDTO.getType());

		postDao.save(post);
	}

	@Override
	public void update(PostDTO postDTO) {

		Post post = postDao.getOne((long) postDTO.getId());
		if (post != null) {
			post.setImage(postDTO.getImage());
			post.setName(postDTO.getName());
			post.setDescription(postDTO.getDescription());
			post.setType(postDTO.getType());
			postDao.save(post);
		}
	}

	@Override
	public void delete(int id) {

		Post post = postDao.getOne((long) id);
		if (post != null) {
			postDao.delete(post);
		}

	}

	@Override
	public PostDTO get(Long id) {
		Post post = postDao.getOne(id);
		if (post != null) {
			return convert(post);
		}
		return null;
	}

	@Override
	public List<PostDTO> getAll(String name, PageRequest pageRequest) {
		List<Post> listPosts = postDao.findPost( name,pageRequest);

		List<PostDTO> listPostDTOs = new ArrayList<PostDTO>();
		for (Post post : listPosts) {
			listPostDTOs.add(convert(post));
		}

		return listPostDTOs;

	}

	private PostDTO convert(Post post) {

		PostDTO postDTO = new PostDTO();
		postDTO.setId(post.getId());
		postDTO.setDescription(post.getDescription());
		postDTO.setName(post.getName());
		postDTO.setImage(post.getImage());
		postDTO.setType(post.getType());

		if (post.getCreatedBy() != null) {
			postDTO.setCreateById((long) post.getCreatedBy().getId());
			postDTO.setCreateBy(post.getCreatedBy().getName());
		}
		if (post.getCreatedDate() != null) {
			postDTO.setCreateDate(
					com.do_an.utt.utils.DateTimeUtils.formatDate(post.getCreatedDate(), DateTimeUtils.DD_MM_YYYY));
		}

		return postDTO;
	}

	@Override
	public Long count(String name) {
		return postDao.countPost(name);
	}

	// bai viet

	@Override
	public List<PostDTO> getAll1(PageRequest pageRequest) {
		List<Post> listPosts = postDao.findPost1(pageRequest);

		List<PostDTO> listPostDTOs = new ArrayList<PostDTO>();
		for (Post post : listPosts) {
			listPostDTOs.add(convert(post));
		}

		return listPostDTOs;
	}

	@Override
	public Long count1() {
		return postDao.countPost1();
	}

	// su kien

	@Override
	public List<PostDTO> getAll2(PageRequest pageRequest) {
		List<Post> listPosts = postDao.findPost2(pageRequest);

		List<PostDTO> listPostDTOs = new ArrayList<PostDTO>();
		for (Post post : listPosts) {
			listPostDTOs.add(convert(post));
		}

		return listPostDTOs;
	}

	@Override
	public Long count2() {
		return postDao.countPost2();
	}

}
