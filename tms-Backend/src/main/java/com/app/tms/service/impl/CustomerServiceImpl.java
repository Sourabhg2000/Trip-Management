package com.app.tms.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.tms.dto.CustomerDto;
import com.app.tms.entity.Customer;
import com.app.tms.exception.ResourceNotFoundException;
import com.app.tms.mapper.CustomerMapper;
import com.app.tms.repository.CustomerRepository;
import com.app.tms.service.CustomerService;

@Service
public class CustomerServiceImpl implements CustomerService {

    //private final CustomerRepository customerRepository;

	private CustomerRepository customerRepository;
	
    public CustomerServiceImpl(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    @Override
    public CustomerDto createCustomer(CustomerDto customerDto) {
        Customer customer = CustomerMapper.mapToCustomer(customerDto);
        Customer savedCustomer = customerRepository.save(customer);
        return CustomerMapper.mapToCustomerDto(savedCustomer);
    }

	@Override
	public CustomerDto getCustomerById(Long customerId) {
		Customer customer = customerRepository.findById(customerId)
		.orElseThrow(() ->
			new ResourceNotFoundException("Customer does not exist with given Id : "+customerId));
		return CustomerMapper.mapToCustomerDto(customer);
	}

	@Override
	public List<CustomerDto> getAllCustomers() {
		List<Customer> customers = customerRepository.findAll();
		return customers.stream().map((customer) -> CustomerMapper.mapToCustomerDto(customer))
				.collect(Collectors.toList());
	}

	@Override
	public CustomerDto updateCustomer(Long customerId, CustomerDto updatedCustomer) {
		Customer customer = customerRepository.findById(customerId).orElseThrow(
				() -> new ResourceNotFoundException("Customer does not exist with id : "+customerId)
		);
		customer.setName(updatedCustomer.getName());
		customer.setEmail(updatedCustomer.getEmail());
		customer.setMobile(updatedCustomer.getMobile());
		customer.setDate(updatedCustomer.getDate());
		customer.setPassword(updatedCustomer.getPassword());
		customer.setGender(updatedCustomer.getGender());
		
		Customer updatedCustomerObj = customerRepository.save(customer);
		
		return CustomerMapper.mapToCustomerDto(updatedCustomerObj);
	}

	@Override
	public void deleteCustomer(Long customerId) {
		Customer customer = customerRepository.findById(customerId).orElseThrow(
				() -> new ResourceNotFoundException("Customer does not exist with id : "+customerId)
		);	
		customerRepository.deleteById(customerId);
	}
	
	@Override
	public Customer verification(String email, String name) {
		Customer verifyCustomer = CustomerRepository.findByEmailAndName(email,name);
		System.out.println(verifyCustomer);
		return verifyCustomer;
	}
}
