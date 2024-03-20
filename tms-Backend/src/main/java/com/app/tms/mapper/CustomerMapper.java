package com.app.tms.mapper;
import com.app.tms.dto.CustomerDto;
import com.app.tms.entity.Customer;

public class CustomerMapper {
	public static CustomerDto mapToCustomerDto (Customer customer) {
		return new CustomerDto(
				customer.getId(),
				customer.getName(),
				customer.getEmail(),
				customer.getMobile(),
				customer.getDate(),
				customer.getPassword(),
				customer.getGender()
			);
	}
	
	public static Customer mapToCustomer (CustomerDto customerDto) {
		return new Customer(
				customerDto.getId(),
				customerDto.getName(),
				customerDto.getEmail(),
				customerDto.getMobile(),
				customerDto.getDate(),
				customerDto.getPassword(),
				customerDto.getGender()
			);
	}
}
