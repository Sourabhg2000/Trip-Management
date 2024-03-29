package com.app.tms.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.tms.entity.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Long> {

	Customer findByFullName(String fullName);
	
	
}
