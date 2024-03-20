package com.app.tms.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.tms.entity.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Long> {
	@Query("Select c from Customer c where c.email = :email and c.password = :password")
	static
	Customer findByEmailAndName(@Param("email") String email, @Param("password") String password) {
		// TODO Auto-generated method stub
		return null;
	}
}
