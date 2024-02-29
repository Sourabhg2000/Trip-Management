package com.app.tms.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.tms.dto.PackagesDto;
import com.app.tms.entity.Guide;
import com.app.tms.entity.Packages;
import com.app.tms.exception.ResourceNotFoundException;
import com.app.tms.mapper.GuideMapper;
import com.app.tms.mapper.PackagesMapper;
import com.app.tms.repository.GuideRepository;
import com.app.tms.repository.PackagesRepository;
import com.app.tms.service.PackagesService;

@Service
public class PackagesServiceImpl implements PackagesService {
	
	private final PackagesRepository packagesRepository;
	
	public PackagesServiceImpl(PackagesRepository packagesRepository) {
		this.packagesRepository = packagesRepository;
	}
	
	@Override
	public PackagesDto createPackages(PackagesDto packagesDto) {
		Packages packages = PackagesMapper.mapToPackages(packagesDto);
		Packages savedPackages = packagesRepository.save(packages);
		return PackagesMapper.mapToPackagesDto(savedPackages);
	}

	@Override
	public PackagesDto getPackagesById(Long packagesId) {
		Packages packages = packagesRepository.findById(packagesId)
				.orElseThrow(() ->
					new ResourceNotFoundException("Guide does not exist with given Id : "+packagesId));
				return PackagesMapper.mapToPackagesDto(packages);
	}

	@Override
	public List<PackagesDto> getAllPackagess() {
		List<Packages> packagess = packagesRepository.findAll();
		return packagess.stream().map((packages) -> PackagesMapper.mapToPackagesDto(packages))
				.collect(Collectors.toList());
	}

	@Override
	public PackagesDto updatePackages(Long packagesId, PackagesDto updatedPackages) {
		Packages packages = packagesRepository.findById(packagesId).orElseThrow(
				() -> new ResourceNotFoundException("Packages does not exist with id : "+packagesId)
		);
		packages.setName(updatedPackages.getName());
		packages.setDescription(updatedPackages.getDescription());
		packages.setDuration(updatedPackages.getDuration());
		packages.setPrice(updatedPackages.getPrice());
		packages.setState(updatedPackages.getState());
		packages.setCountry(updatedPackages.getCountry());
		packages.setDate(updatedPackages.getDate());
		packages.setAvailibility(updatedPackages.getAvailibility());
		
		Packages updatedPackagesObj = packagesRepository.save(packages);
		
		return PackagesMapper.mapToPackagesDto(updatedPackagesObj);
	}

	@Override
	public void deletePackages(Long packagesId) {
		Packages packages = packagesRepository.findById(packagesId).orElseThrow(
				() -> new ResourceNotFoundException("Packages does not exist with id : "+packagesId)
		);	
		packagesRepository.deleteById(packagesId);
		
	}
	
}
