package com.max.appserver.Repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.max.appserver.Models.User;

public interface UserRepo extends JpaRepository<User, Long> {
    @Query(value = "SELECT COUNT(*) FROM user", nativeQuery = true)
    int getUserCount();

	User findByEmail(String email);
}
