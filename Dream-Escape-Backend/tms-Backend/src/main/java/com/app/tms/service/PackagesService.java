package com.app.tms.service;

import java.util.List;

import com.app.tms.dto.PackagesDto;

public interface PackagesService {
	PackagesDto createPackages (PackagesDto packagesDto);
	
	PackagesDto getPackagesById(Long packagesId);
	
	List<PackagesDto> getAllPackagess();
	
	PackagesDto updatePackages(Long packagesId, PackagesDto updatedPackages);
	
	void deletePackages(Long packagesId);
}
