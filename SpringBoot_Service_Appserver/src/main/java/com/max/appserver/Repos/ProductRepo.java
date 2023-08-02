package com.max.appserver.Repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.max.appserver.Models.Product;

public interface ProductRepo extends JpaRepository<Product, Long> {
    @Query(value = "SELECT COUNT(*) FROM product", nativeQuery = true)
    int getProductCount();
}
