package com.max.appserver.Repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.max.appserver.Models.Users;

public interface UserRepo extends JpaRepository<Users, Long> {
    @Query(value = "SELECT COUNT(*) FROM user", nativeQuery = true)
    int getUserCount();

	Users findByEmail(String email);
}
