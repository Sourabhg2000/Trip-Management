package com.app.tms.dto;

public class PackagesDto {

    private Long id;
	private String name;
	private String description;
	private String duration;
	private long price;
	private String state;
	private String country;
	private String date;
	private int availibility;
	
	public PackagesDto() {
		
	}
	
	public PackagesDto(Long id, String name, String description, String duration, long price, String state,
			String country, String date, int availibility) {
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
