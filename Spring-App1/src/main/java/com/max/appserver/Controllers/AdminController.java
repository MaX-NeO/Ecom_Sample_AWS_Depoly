package com.max.appserver.Controllers;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.max.appserver.Models.Admin;
import com.max.appserver.Services.AdminService;


@RestController
@RequestMapping("/admin")
@CrossOrigin("*")
public class AdminController {
	@Autowired AdminService service;

	@PostMapping("/login")
	private String Loginadmin(@RequestBody Map<String, String> Logina) {
	    String email = Logina.get("email");
	    String password = Logina.get("password");
	    String result = service.Loginadmin(email, password);
	    return result;
	}

	@PostMapping("/add")
	private Admin AddAdmin(@RequestBody Admin admin) {
		return service.addAdmin(admin);
	}
}
