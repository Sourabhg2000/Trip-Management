package com.app.tms.mapper;
import com.app.tms.dto.GuideDto;
import com.app.tms.entity.Guide;

public class GuideMapper {
	public static GuideDto mapToGuideDto (Guide guide) {
		return new GuideDto(
				guide.getId(),
				guide.getName(),
				guide.getEmail(),
				guide.getMobile(),
				guide.getDate(),
				guide.getPassword(),
				guide.getGender()
			);
	}
	
	public static Guide mapToGuide (GuideDto guideDto) {
		return new Guide(
				guideDto.getId(),
				guideDto.getName(),
				guideDto.getEmail(),
				guideDto.getMobile(),
				guideDto.getDate(),
				guideDto.getPassword(),
				guideDto.getGender()
			);
	}
}
