package com.app.tms.controller;

import java.util.List;

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

import com.app.tms.dto.GuideDto;
import com.app.tms.service.GuideService;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/guides")

public class GuideController {
	@Autowired
	private GuideService guideService; 
	
	//Add Guide REST API
	@PostMapping
	public ResponseEntity<GuideDto> createGuide(@RequestBody GuideDto guideDto){
		GuideDto savedGuide = guideService.createGuide(guideDto);
		return new ResponseEntity<>(savedGuide, HttpStatus.CREATED);
	}
	
	//Get Guide REST API
	@GetMapping("{id}")
	public ResponseEntity<GuideDto> getGuideById(@PathVariable("id") Long guideId){
		GuideDto guideDto = guideService.getGuideById(guideId);
		return ResponseEntity.ok(guideDto);
	}
	
	//Get all Guide REST API
	@GetMapping
	public ResponseEntity<List<GuideDto>> getAllGuides(){
		List<GuideDto> guides = guideService.getAllGuides();
		return ResponseEntity.ok(guides);
	}
	
	//Update guide details REST API
	@PutMapping("{id}")
	public ResponseEntity<GuideDto> updateGuide(@PathVariable("id") Long guideId,
					@RequestBody GuideDto updatedGuide){
		GuideDto guideDto = guideService.updateGuide(guideId, updatedGuide);
		return ResponseEntity.ok(guideDto);
	}
	
	
	//Delete Guide REST API
	@DeleteMapping("{id}")
	public ResponseEntity<String> deleteGuide (@PathVariable("id") Long guideId){
		guideService.deleteGuide(guideId);
		return ResponseEntity.ok("Guide deleted successfully!");
	}
}
