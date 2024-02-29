package com.app.tms.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.app.tms.entity.Guide;

public interface GuideRepository extends JpaRepository<Guide, Long> {
	
}
