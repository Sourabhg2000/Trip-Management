package com.app.tms.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.tms.dto.GuideDto;
import com.app.tms.entity.Guide;
import com.app.tms.exception.ResourceNotFoundException;
import com.app.tms.mapper.GuideMapper;
import com.app.tms.repository.GuideRepository;
import com.app.tms.service.GuideService;

@Service
public class GuideServiceImpl implements GuideService {

    private final GuideRepository guideRepository;

    @Autowired
    public GuideServiceImpl(GuideRepository guideRepository) {
        this.guideRepository = guideRepository;
    }

    @Override
    public GuideDto createGuide(GuideDto guideDto) {
        Guide guide = GuideMapper.mapToGuide(guideDto);
        Guide savedGuide = guideRepository.save(guide);
        return GuideMapper.mapToGuideDto(savedGuide);
    }

	@Override
	public GuideDto getGuideById(Long guideId) {
		Guide guide = guideRepository.findById(guideId)
		.orElseThrow(() ->
			new ResourceNotFoundException("Guide does not exist with given Id : "+guideId));
		return GuideMapper.mapToGuideDto(guide);
	}

	@Override
	public List<GuideDto> getAllGuides() {
		List<Guide> guides = guideRepository.findAll();
		return guides.stream().map((guide) -> GuideMapper.mapToGuideDto(guide))
				.collect(Collectors.toList());
	}

	@Override
	public GuideDto updateGuide(Long guideId, GuideDto updatedGuide) {
		Guide guide = guideRepository.findById(guideId).orElseThrow(
				() -> new ResourceNotFoundException("Guide does not exist with id : "+guideId)
		);
		guide.setName(updatedGuide.getName());
		guide.setEmail(updatedGuide.getEmail());
		guide.setMobile(updatedGuide.getMobile());
		guide.setDate(updatedGuide.getDate());
		guide.setPassword(updatedGuide.getPassword());
		guide.setGender(updatedGuide.getGender());
		
		Guide updatedGuideObj = guideRepository.save(guide);
		
		return GuideMapper.mapToGuideDto(updatedGuideObj);
	}

	@Override
	public void deleteGuide(Long guideId) {
		Guide guide = guideRepository.findById(guideId).orElseThrow(
				() -> new ResourceNotFoundException("Guide does not exist with id : "+guideId)
		);	
		guideRepository.deleteById(guideId);
	}
}
