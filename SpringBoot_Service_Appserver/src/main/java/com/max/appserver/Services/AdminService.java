package com.max.appserver.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.max.appserver.Models.Admin;
import com.max.appserver.Repos.AdminRepo;

@Service
public class AdminService {
	@Autowired
	private AdminRepo repo;
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	// Admin Login
		public String Loginadmin(String email, String password) {
			
			Admin adminx = repo.findByEmail(email);
			if (adminx == null) {
				return "Invalid User !";
			} else {
				if (passwordEncoder.matches(password, adminx.getPassword())) {
					return "Login Successful !";
				} else {
					return "Invalid Password";
				}
			}
		}
	// Add Admin
		public Admin addAdmin(Admin admin) {
			String encodepass = passwordEncoder.encode(admin.getPassword());
			admin.setPassword(encodepass);
			return repo.save(admin);
		}
		
	
}
