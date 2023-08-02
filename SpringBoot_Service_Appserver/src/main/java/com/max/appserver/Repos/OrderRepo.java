package com.max.appserver.Repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.max.appserver.Models.Orders;

public interface OrderRepo extends JpaRepository<Orders, Long> {

	List<Orders> findByUserUid(Long uid);

	
    @Query(value = "SELECT COUNT(*) FROM orders", nativeQuery = true)
    int getOrdersCount();
}
