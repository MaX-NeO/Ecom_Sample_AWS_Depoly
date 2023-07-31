package com.max.appserver.Repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.max.appserver.Models.Admin;

public interface AdminRepo extends JpaRepository<Admin, Long> {

	Admin findByEmail(String email);

}
