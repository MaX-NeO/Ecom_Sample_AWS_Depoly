package com.max.appserver.Controllers;

import java.util.List;
import java.util.Map;
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

import com.max.appserver.Models.User;
import com.max.appserver.Services.UserService;
@CrossOrigin("*")
@RestController
@RequestMapping("/user")
public class UserController {
	@Autowired
	private UserService service;
	
	@GetMapping("/get")
	public List<User> GetUser(){
		return service.getUser();
	}
	@GetMapping("/find/{id}")
	public Optional<User> FindUser(@PathVariable Long id){
		return service.findUser(id);
	}
	
	@PostMapping("/add")
	public User AddUser(@RequestBody User user) {
		return service.addUser(user);
	}
	@PutMapping("/edit/{id}")
	public User EditUser(@RequestBody User user,@PathVariable Long id) {
		return service.editUser(id, user);
	}
	@DeleteMapping("/delete/{id}")
	public String DeleteUser(@PathVariable Long id) {
		return service.deleteUser(id);
	}
	@GetMapping("/getcount")
	public int UserCount() {
		return service.userCount();
	}

	@PostMapping("/signin")
	private String Login(@RequestBody Map<String, String> Loginx) {
	    String email = Loginx.get("email");
	    String password = Loginx.get("password");
	    String result = service.Loginx(email, password);
	    return result;
	}
    @PostMapping("/signup")
    public String Signup(@RequestBody User userx) {
        return service.SignUpx(userx);
    }
	
}
