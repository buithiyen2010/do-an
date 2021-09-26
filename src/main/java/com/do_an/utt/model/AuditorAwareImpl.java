package com.do_an.utt.model;

import java.util.Optional;

import org.springframework.data.domain.AuditorAware;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;

import com.do_an.utt.entity.User;


public class AuditorAwareImpl implements AuditorAware<User> {
	@Override
	public Optional<User> getCurrentAuditor() {
		if (SecurityContextHolder.getContext().getAuthentication() != null
				&& !(SecurityContextHolder.getContext().getAuthentication() instanceof AnonymousAuthenticationToken)) {
			UserPrincipal currentUser = (UserPrincipal) SecurityContextHolder.getContext().getAuthentication()
					.getPrincipal();
			return Optional.of(new User(currentUser.getId()));
		}
		return Optional.ofNullable(null);
	}
}
