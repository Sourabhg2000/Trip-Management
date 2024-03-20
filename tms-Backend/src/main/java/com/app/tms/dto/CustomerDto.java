package com.app.tms.dto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


public class CustomerDto {
	
	private Long id;
	
	private String name;
	private String email;
	private String mobile;
	private String date;
	private String password;
	private String gender;
	
	public CustomerDto() {
		
	}

	public CustomerDto(Long id, String name, String email, String mobile, String date, String password, String gender) {
//		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.mobile = mobile;
		this.date = date;
		this.password = password;
		this.gender = gender;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}
		
}
