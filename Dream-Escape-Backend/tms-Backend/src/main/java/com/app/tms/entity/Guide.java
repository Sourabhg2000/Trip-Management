package com.app.tms.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@Builder
@Entity
@Table(name="Guide")

public class Guide {
	
//	public enum Gender {
//        MALE,
//        FEMALE,
//        OTHER
//    }
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	@Column(name="Name")
	private String name;
	
	@Column(name="Email")
	private String email;
	
	@Column(name="Mobile_Number")
	private String mobile;
	
	@Column(name="Date")
	private String date;
	
	@Column(name="Password")
	private String password;
	
	@Column(name="Gender")
	private String gender;

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

	public Guide(Long id, String name, String email, String mobile, String date, String password, String gender) {
		
		this.id = id;
		this.name = name;
		this.email = email;
		this.mobile = mobile;
		this.date = date;
		this.password = password;
		this.gender = gender;
	}
	
	public Guide() {
		
	}
	
	
}
