package com.ssafy.backend.domain.user.service;

import com.ssafy.backend.domain.common.exception.ResourceNotFoundException;
import com.ssafy.backend.domain.user.*;
import com.ssafy.backend.domain.user.dto.*;
import com.ssafy.backend.domain.user.exception.UserNotFoundException;
import com.ssafy.backend.domain.user.repository.ChallengeRepository;
import com.ssafy.backend.domain.user.repository.MySkillRepository;
import com.ssafy.backend.domain.user.repository.SkillRepository;
import com.ssafy.backend.domain.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;

import static com.ssafy.backend.domain.common.GlobalMethod.getUserId;

@Slf4j
@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class UserService {

	private final UserRepository userRepository;
	private final SkillRepository skillRepository;
	private final MySkillRepository mySkillRepository;
	private final ChallengeRepository challengeRepository;
	private final RedisTemplate<String, String> redisTemplate;

	@Transactional
	public void signUp(UserInfo userInfo) {
		User findUser = userRepository.findById(getUserId())
				.orElseThrow(UserNotFoundException::new);

		findUser.update(userInfo);
		findUser.authorizeUser();

		if (userInfo.getMySkill() == null)
			return;
		// 언어 스킬 등록
		Map<String, Skill> skillMap = skillRepository.findAll().stream()
				.collect(Collectors.toMap(Skill::getSkillName, skill -> skill));

		userInfo.getMySkill().stream()
				.map(skillMap::get)
				.map(skill -> MySkill.builder()
						.skill(skill)
						.user(findUser)
						.build())
				.forEach(mySkillRepository::save);

	}

	public UserInfoResponse getUserProfile() {
		User findUser = userRepository.findById(getUserId())
				.orElseThrow(UserNotFoundException::new);
		List<String> mySkills = mySkillRepository.findByUser(findUser);

		Challenge challenge = challengeRepository.findByUserId(getUserId())
				.orElseThrow(() -> new ResourceNotFoundException("Challenge.user", getUserId()));
		ChallengeInfoResponse challengeInfoResponse = ChallengeInfoResponse.fromEntity(challenge);

		String state = redisTemplate.opsForValue().get("userState-" + getUserId());
		return UserInfoResponse.fromEntity(findUser, mySkills, challengeInfoResponse, state);
	}

	@Transactional
	public void modifyUserProfile(UserInfo userInfo) {
		User findUser = userRepository.findById(getUserId())
				.orElseThrow(UserNotFoundException::new);

		findUser.update(userInfo);

		if (userInfo.getMySkill() == null)
			return;

		// 언어 스킬 재등록
		Map<String, Skill> skillMap = skillRepository.findAll().stream()
				.collect(Collectors.toMap(Skill::getSkillName, skill -> skill));
		// 내가 등록한 언어 스킬
		List<MySkillInfo> mySkills = mySkillRepository.findByUserId(getUserId());
		// 수정한 언어 목록
		Set<String> modifySkillSet = new HashSet<>(userInfo.getMySkill());

		for (MySkillInfo mySkill : mySkills) {
			if (modifySkillSet.contains(mySkill.getSkillName())) {
				modifySkillSet.remove(mySkill.getSkillName());
			} else {
				mySkillRepository.deleteById(mySkill.getId());
			}
		}

		for (String name : modifySkillSet) {
			mySkillRepository.save(MySkill.builder()
					.skill(skillMap.get(name))
					.user(findUser).build());
		}

	}

	@Transactional
	public void withdrawal() {
		User findUser = userRepository.findById(getUserId())
				.orElseThrow(UserNotFoundException::new);

		// TODO - CASCADE 적용하기

		userRepository.delete(findUser);
	}

	@Transactional
	public void updateState(State state) {
		redisTemplate.opsForValue().set("userState-" + getUserId(), String.valueOf(state));
	}

	public List<SearchUser> getUserInfo(String githubId) {
		return userRepository.findByGithubIdContaining(githubId).stream()
				.map(SearchUser::toDto)
				.collect(Collectors.toList());
	}
}
