package com.max.appserver.Services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.max.appserver.Models.Product;
import com.max.appserver.Repos.ProductRepo;

@Service
public class ProductService {
	@Autowired
	private ProductRepo prepo;
	
	public List<Product> getProduct() {
		return prepo.findAll();
	}
	public Optional<Product> findProduct(Long id) {
		return prepo.findById(id);
	}
	public Product addProduct(Product product) {
		return prepo.save(product);
	}
	
	public Product editProduct(Long id, Product product) {
		Product xproduct = prepo.findById(id).orElse(null);
		if(xproduct !=null) {
			xproduct.setProductname(product.getProductname());
			xproduct.setProductprice(product.getProductprice());
			xproduct.setProductquantity(product.getProductquantity());
			xproduct.setProductimage(product.getProductimage());
			xproduct.setProductdesc(product.getProductdesc());
			return prepo.saveAndFlush(xproduct);
		}
		else {
			return null;
		}
	}
	
	public String deleteProduct(Long id) {
		Product xuser = prepo.findById(id).orElse(null);
		
		if(xuser !=null) {
			prepo.deleteById(id);
			return "Product deleted"+ id;
		}
		else {
			return "invalid userID";
		}
		
	}
	public int productCount() {
		return prepo.getProductCount();
	}
}
