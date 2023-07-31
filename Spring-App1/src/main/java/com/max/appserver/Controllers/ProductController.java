package com.max.appserver.Controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.max.appserver.Models.Product;
import com.max.appserver.Services.ProductService;
@CrossOrigin("*")
@RestController
@RequestMapping("/product")
public class ProductController {
	@Autowired
	private ProductService service;
	
	
	@GetMapping("/get")
	public List<Product> GetProduct(){
		return service.getProduct();
	}
	
	@GetMapping("/find/{id}")
	public Optional<Product> FindProduct(@PathVariable Long id){
		return service.findProduct(id);
	}
	
	@PostMapping("/add")
	public Product AddProduct(@RequestBody Product product) {
		return service.addProduct(product);
	}
	@PutMapping("/edit/{id}")
	public Product EditProduct(@RequestBody Product product,@PathVariable Long id) {
		return service.editProduct(id, product);
	}
	@DeleteMapping("/delete/{id}")
	public String DeleteProduct(@PathVariable Long id) {
		return service.deleteProduct(id);
	}
	@GetMapping("/getcount")
	public int ProductCount() {
		return service.productCount();
	}
	
}
