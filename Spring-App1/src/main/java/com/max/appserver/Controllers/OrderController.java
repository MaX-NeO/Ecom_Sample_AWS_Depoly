package com.max.appserver.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.max.appserver.Models.Orders;
import com.max.appserver.Services.OrderService;

@CrossOrigin("*")
@RestController
@RequestMapping("/order")
public class OrderController {
	@Autowired
	private OrderService service;
	
	@GetMapping("/get")
	public List<Orders> GetOrders(){
		return service.getOrders();
	}
	@GetMapping("/find/{id}")
	public Orders FindOrders(@PathVariable Long id) {
		return service.findOrders(id);
	}
	@GetMapping("/get/{id}")
	public List<Orders> GetOrdersByUID(@PathVariable Long id){
		return service.getOrdersbyUid(id);
	}
	
	@PostMapping("/add/{id}")
	public Orders CreateOrder(@PathVariable Long id, @RequestBody Orders order) {
		return service.createOrder(order,id);
	}
	@GetMapping("/getcount")
	public int OrderCount() {
		return service.orderCount();
	}
}
