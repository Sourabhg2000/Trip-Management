package com.app.tms.service;
import java.util.List;
import com.app.tms.dto.GuideDto;

public interface GuideService {
	GuideDto createGuide (GuideDto guideDto);
	
	GuideDto getGuideById(Long guideId);
	
	List<GuideDto> getAllGuides();
	
	GuideDto updateGuide(Long guideId, GuideDto updatedGuide);
	
	void deleteGuide(Long guideId);
}
