package com.app.tms.mapper;
import com.app.tms.dto.PackagesDto;
import com.app.tms.entity.Packages;

public class PackagesMapper {
	public static PackagesDto mapToPackagesDto (Packages packages) {
		return new PackagesDto(
				packages.getId(),
				packages.getName(),
				packages.getDescription(),
				packages.getDuration(),
				packages.getPrice(),
				packages.getState(),
				packages.getCountry(),
				packages.getDate(),
				packages.getAvailibility()
			);
	}
	
	public static Packages mapToPackages (PackagesDto packagesDto) {
		return new Packages(
				packagesDto.getId(),
				packagesDto.getName(),
				packagesDto.getDescription(),
				packagesDto.getDuration(),
				packagesDto.getPrice(),
				packagesDto.getState(),
				packagesDto.getCountry(),
				packagesDto.getDate(),
				packagesDto.getAvailibility()
			);
	}
}
