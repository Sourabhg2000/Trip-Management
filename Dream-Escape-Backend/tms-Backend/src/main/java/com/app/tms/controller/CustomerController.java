package com.app.tms.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.tms.dto.CustomerDto;
import com.app.tms.dto.GuideDto;
import com.app.tms.entity.Customer;
import com.app.tms.service.CustomerService;
import com.app.tms.service.GuideService;
import com.fasterxml.jackson.databind.JsonNode;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/customers")

public class CustomerController {
	@Autowired
	private CustomerService customerService; 
	
	//Add Customer REST API
	@PostMapping
	public ResponseEntity<CustomerDto> createCustomer(@RequestBody CustomerDto customerDto){
		CustomerDto savedCustomer = customerService.createCustomer(customerDto);
		return new ResponseEntity<>(savedCustomer, HttpStatus.CREATED);
	}
	
	//Get Customer by Id REST API
	@GetMapping("{id}")
	public ResponseEntity<CustomerDto> getCustomerById(@PathVariable("id") Long customerId){
		CustomerDto customerDto = customerService.getCustomerById(customerId);
		return ResponseEntity.ok(customerDto);
	}
	
	//Get all Customer REST API
	@GetMapping
	public ResponseEntity<List<CustomerDto>> getAllCustomers(){
		List<CustomerDto> customers = customerService.getAllCustomers();
		return ResponseEntity.ok(customers);
	}
	
	//Update customer details REST API
	@PutMapping("{id}")
	public ResponseEntity<CustomerDto> updateCustomer(@PathVariable("id") Long customerId,
					@RequestBody CustomerDto updatedCustomer){
		CustomerDto customerDto = customerService.updateCustomer(customerId, updatedCustomer);
		return ResponseEntity.ok(customerDto);
	}
	
	
	//Delete Customer REST API
	@DeleteMapping("{id}")
	public ResponseEntity<String> deleteCustomer (@PathVariable("id") Long customerId){
		customerService.deleteCustomer(customerId);
		return ResponseEntity.ok("Customer deleted successfully!");
	}
//	
//	@GetMapping("verify/{email}/{passwor}")
//	public Customer customerverification(@PathVariable("email") String email, @PathVariable("password") String password){
//		Customer customer =customerService.verification(email,password);
//		return customer;
//	}
	
	 @PostMapping("login")
	    public ResponseEntity<?> login(@RequestBody JsonNode loginData) {
	        String name = loginData.get("name").asText();
	        String password = loginData.get("password").asText();
	        
//	         System.out.println(name + " " + password + " " + role);
	        // Fetch user from the database using the provided fullname
	        CustomerDto customerDto = CustomerService.findByfullname(name);
	        GuideDto guideDto = GuideService.findByUsername(name);

	        // Check if user exists and password matches based on role

	        if (customerDto !=null && name.equals(customerDto.getName())&&customerDto.getPassword().equals(password)) {
	            Map<String, Object> responseData = new HashMap<>();
	            responseData.put("id", customerDto.getId());
	            responseData.put("role", "student");
	            return ResponseEntity.ok().body(responseData);

	        }else if (guideDto != null && name.equals(guideDto.getName()) && guideDto.getPassword().equals(password)) {

	            Map<String,Object> responseData= new HashMap<>();
	            responseData.put("id",guideDto.getId());
	            responseData.put("role","tutor");
	            return ResponseEntity.ok().body(responseData);
	        } else {
	            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password");
	        }

	    }
}
