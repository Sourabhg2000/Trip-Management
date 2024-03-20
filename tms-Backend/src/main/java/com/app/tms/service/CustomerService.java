package com.app.tms.service;
import java.util.List;
import com.app.tms.dto.CustomerDto;
import com.app.tms.entity.Customer;

public interface CustomerService {
	CustomerDto createCustomer (CustomerDto customerDto);
	
	CustomerDto getCustomerById(Long customerId);
	
	List<CustomerDto> getAllCustomers();
	
	CustomerDto updateCustomer(Long customerId, CustomerDto updatedCustomer);
	
	void deleteCustomer(Long customerId);

	Customer verification(String email, String name);
}
