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

import com.app.tms.dto.PackagesDto;
import com.app.tms.service.PackagesService;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/packagess")

public class PackagesController {
	@Autowired
	private PackagesService packagesService; 
	
	//Add Packages REST API
	@PostMapping
	public ResponseEntity<PackagesDto> createPackages(@RequestBody PackagesDto packagesDto){
		PackagesDto savedPackages = packagesService.createPackages(packagesDto);
		return new ResponseEntity<>(savedPackages, HttpStatus.CREATED);
	}
	
	//Get Packages by Id REST API
	@GetMapping("{id}")
	public ResponseEntity<PackagesDto> getPackagesById(@PathVariable("id") Long packagesId){
		PackagesDto packagesDto = packagesService.getPackagesById(packagesId);
		return ResponseEntity.ok(packagesDto);
	}
	
	//Get all Packages REST API
	@GetMapping
	public ResponseEntity<List<PackagesDto>> getAllPackagess(){
		List<PackagesDto> packagess = packagesService.getAllPackagess();
		return ResponseEntity.ok(packagess);
	}
	
	//Update packages details REST API
	@PutMapping("{id}")
	public ResponseEntity<PackagesDto> updatePackages(@PathVariable("id") Long packagesId,
					@RequestBody PackagesDto updatedPackages){
		PackagesDto packagesDto = packagesService.updatePackages(packagesId, updatedPackages);
		return ResponseEntity.ok(packagesDto);
	}
	
	
	//Delete Packages REST API
	@DeleteMapping("{id}")
	public ResponseEntity<String> deletePackages (@PathVariable("id") Long packagesId){
		packagesService.deletePackages(packagesId);
		return ResponseEntity.ok("Packages deleted successfully!");
	}
}
