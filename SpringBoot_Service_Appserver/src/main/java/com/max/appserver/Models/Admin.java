package com.max.appserver.Models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Admin {
	@Id
	@GeneratedValue (strategy = GenerationType.IDENTITY)
	private Long aid;
	private String email;
	private String password;
	private int accesskey;
	
	
	
	public Long getAid() {
		return aid;
	}
	public void setAid(Long aid) {
		this.aid = aid;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public int getAccesskey() {
		return accesskey;
	}
	public void setAccesskey(int accesskey) {
		this.accesskey = accesskey;
	}
	
}
