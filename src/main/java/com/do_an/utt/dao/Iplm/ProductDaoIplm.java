package com.do_an.utt.dao.Iplm;

import java.util.List;

import javax.persistence.EntityManager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.do_an.utt.dao.ProductDao;
import com.do_an.utt.entity.Product;

@Repository //lam viec vs csdl
@Transactional
public class ProductDaoIplm implements ProductDao{
	@Autowired
	EntityManager entityManager;

	@Override
	public void add(Product product) {
		entityManager.persist(product);
	}

	@Override
	public void update(Product product) {
		entityManager.merge(product);
	}

	@Override
	public void delete(int id) {
		entityManager.remove(get(id));
	}

	@Override
	public Product get(int id) {
		return entityManager.find(Product.class, id);
	}

	@Override
	public List<Product> search(String name ,int start ,int length) {
		String jql="SELECT p FROM Product p join p.category WHERE lower(p.name) like lower(concat('%',:name,'%'))";
		return entityManager.createQuery(jql, Product.class).setParameter("name", "%" + name + "%").setFirstResult(start).setMaxResults(length).getResultList();
	}

	@Override
	public List<Product> getAll(int start ,int length) {
		String jql="SELECT p FROM Product p";
		return entityManager.createQuery(jql, Product.class).setFirstResult(start).setMaxResults(length).getResultList();
	}
	
	@Override
	public long countGetAll() {
		String jql="SELECT count(p) FROM Product p";
		return entityManager.createQuery(jql, Long.class).getSingleResult();
	}

	@Override
	public long countSearch(String name) {
		String jql="SELECT count(p) FROM Product p  WHERE lower(p.name) like lower(concat('%',:name,'%'))";
		return entityManager.createQuery(jql, Long.class).setParameter("name", "%" + name + "%").getSingleResult();
	}

	@Override
	public List<Product> filterProduct(String nameCategory, long fromPrice, long toPrice, int start, int length) {
		String jql="SELECT p FROM Product p join p.category c where c.name like :cname and (p.price between :fromPrice AND :toPrice)";
		return entityManager.createQuery(jql, Product.class).setParameter("cname","%"+ nameCategory +"%").
				setParameter("fromPrice", fromPrice).setParameter("toPrice", toPrice).setFirstResult(start).setMaxResults(length).getResultList();
	}

	@Override
	public long countFilterProduct(String nameCategory, long fromPrice ,long toPrice) {
		String jql="SELECT count(p) FROM Product p join p.category c where c.name like :cname and (p.price between :fromPrice AND :toPrice)";
		return entityManager.createQuery(jql, Long.class).setParameter("cname","%"+ nameCategory +"%").
				setParameter("fromPrice", fromPrice).setParameter("toPrice", toPrice).getSingleResult();
	}
}
