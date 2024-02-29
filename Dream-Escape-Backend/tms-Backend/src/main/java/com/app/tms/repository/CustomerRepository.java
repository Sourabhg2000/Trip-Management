package com.app.tms.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.app.tms.entity.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Long> {
	
}
