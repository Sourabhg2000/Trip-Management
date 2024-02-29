package com.app.tms.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.app.tms.entity.Packages;

public interface PackagesRepository extends JpaRepository<Packages, Long> {
	
}
