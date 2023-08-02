package com.max.appserver.Services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.max.appserver.Models.Users;
import com.max.appserver.Repos.UserRepo;

@Service
public class UserService {
	@Autowired
	private UserRepo urepo;
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	public List<Users> getUser() {
		return urepo.findAll();
	}
	public Users addUser(Users user) {
		String encodePass =  passwordEncoder.encode(user.getPassword());
		user.setPassword(encodePass);
		return urepo.save(user);
	}
	public Optional<Users> findUser(Long id) {
		return urepo.findById(id);
	}
	public Users editUser(Long id, Users user) {
		Users xuser = urepo.findById(id).orElse(null);
		String encodePass =  passwordEncoder.encode(user.getPassword());
		if(xuser !=null) {
			xuser.setEmail(user.getEmail());
			xuser.setName(user.getName());
			xuser.setPhone(user.getPhone());
			xuser.setAddress(user.getAddress());
			xuser.setPassword(encodePass);
			return urepo.saveAndFlush(xuser);
		}
		else {
			return null;
		}
	}
	
	public String deleteUser(Long id) {
		Users xuser = urepo.findById(id).orElse(null);
		
		if(xuser !=null) {
			urepo.deleteById(id);
			return "user deleted"+ id;
		}
		else {
			return "invalid userID";
		}
		
	}
	public int userCount() {
		return urepo.getUserCount();
	}
	//User Login
		public String Loginx(String email, String password) {
			Users userx = urepo.findByEmail(email);
			if (userx == null) {
				return "Invalid Email !" +HttpStatus.NOT_FOUND;
			} else {
				if(passwordEncoder.matches(password, userx.getPassword())) {
					
					return "Login Successful ! " +HttpStatus.OK +" "+userx.getUid();
				} else {
					return "Invalid Password"+HttpStatus.UNAUTHORIZED;
				}
			}
		}

	//User SignUp
		public String SignUpx(Users userx) {
			String email = userx.getEmail();
			String password = userx.getPassword();
			String encodepass = passwordEncoder.encode(password);
			userx.setPassword(encodepass);
			Users userxAuth = urepo.findByEmail(email);
			if (userxAuth == null) {
				urepo.save(userx);
				return "Signup Successful !";
			} else {
				if (userxAuth.getEmail().equals(email)) {
					return "Email Already Exists";
				} else {
					return "Invalid Email";
				}
			}
		}
}
