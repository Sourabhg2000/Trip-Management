package com.app.tms.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@Entity
@Table(name="Packages")

public class Packages {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	@Column(name="Name")
	private String name;
	
	@Column(name="Description")
	private String description;
	
	@Column(name="Duration")
	private String duration;
	
	@Column(name="Price")
	private long price;
	
	@Column(name="State")
	private String state;
	
	@Column(name="Country")
	private String country;
	
	@Column(name="Date")
	private String date;
	
	@Column(name="Availibility")
	private int availibility;
	
	public Packages() {
		
	}
	
	public Packages(Long id, String name, String description, String duration, long price, String state, String country,
			String date, int availibility) {
		this.id = id;
		this.name = name;
		this.description = description;
		this.duration = duration;
		this.price = price;
		this.state = state;
		this.country = country;
		this.date = date;
		this.availibility = availibility;
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

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getDuration() {
		return duration;
	}

	public void setDuration(String duration) {
		this.duration = duration;
	}

	public long getPrice() {
		return price;
	}

	public void setPrice(long price) {
		this.price = price;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public int getAvailibility() {
		return availibility;
	}

	public void setAvailibility(int availibility) {
		this.availibility = availibility;
	}


}