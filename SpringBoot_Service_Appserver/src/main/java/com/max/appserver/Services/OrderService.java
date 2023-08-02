package com.max.appserver.Services;

import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.max.appserver.Models.Orders;
import com.max.appserver.Models.Users;
import com.max.appserver.Repos.OrderRepo;
import com.max.appserver.Repos.UserRepo;

@Service
public class OrderService {
	@Autowired
	private OrderRepo repo;
	@Autowired
	private UserRepo urepo;

	public List<Orders> getOrders() {
		return repo.findAll();
	}
	public Orders findOrders(Long id) {
		return repo.findById(id).orElse(null);
	}

	public List<Orders> getOrdersbyUid(Long uid) {
		List<Orders> orders = repo.findByUserUid(uid);
		if (!orders.isEmpty()) {
			Collections.reverse(orders);
			return orders;
		} else {
			return null;
		}
	}
    public Orders createOrder(Orders order, Long userId) {
        Users user = urepo.findById(userId).orElse(null);
        if (user != null) {
            order.setUser(user);
            return repo.save(order);
        } else {
            return null;
        }
    }
	public int orderCount() {
		return repo.getOrdersCount();
	}

}
