package com.do_an.utt;

import java.util.concurrent.TimeUnit;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.data.domain.AuditorAware;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.http.CacheControl;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurationSupport;

import com.do_an.utt.entity.User;
import com.do_an.utt.model.AuditorAwareImpl;
import com.do_an.utt.utils.RoleEnum;

@SpringBootApplication
@EnableJpaAuditing(auditorAwareRef = "auditorAware")
public class MySpringBootApplication  extends WebMvcConfigurationSupport {

	public static void main(String[] args) {
		SpringApplication.run(MySpringBootApplication.class, args);
	}

	@Autowired
	UserDetailsService userDetailsService;

	@Autowired
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {

		auth.userDetailsService(userDetailsService).passwordEncoder(passwordEncoder());

	}

	@Bean
	public BCryptPasswordEncoder passwordEncoder() {
		BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder(12);
		return bCryptPasswordEncoder;
	}

	@Bean
	public org.thymeleaf.extras.springsecurity5.dialect.SpringSecurityDialect springSecurityDialect() {
		org.thymeleaf.extras.springsecurity5.dialect.SpringSecurityDialect dialect = new org.thymeleaf.extras.springsecurity5.dialect.SpringSecurityDialect();
		return dialect;
	}

	@Bean
	public AuditorAware<User> auditorAware() {
		return new AuditorAwareImpl();
	}

	@Order(1)
	@Configuration
	public class AdminSecurity extends WebSecurityConfigurerAdapter {

		@Override
		protected void configure(HttpSecurity http) throws Exception {
			// phan quyen trong trang admin
			System.out.println("authitencation called");
			http.csrf().disable()
			.antMatcher("/admin/**").authorizeRequests()
			.antMatchers("/admin/**").hasAnyAuthority(RoleEnum.ROLE_ADMIN.name())
					// cau hinh giao dien
					.and().formLogin().loginPage("/login-admin").loginProcessingUrl("/admin/login-adminUrl")
					.defaultSuccessUrl("/staff/index", true).failureUrl("/login-admin?e=error").and().logout()
					.logoutUrl("/admin/logout").logoutSuccessUrl("/login-admin").permitAll()
					// exeption
					.and().exceptionHandling().accessDeniedPage("/login-admin?e=deny");

		}

		@Configuration
		@Order(2)
		public class StaffSecurity extends WebSecurityConfigurerAdapter {

			@Override
			protected void configure(HttpSecurity http) throws Exception {
				// phan quyen trong trang admin
				http.csrf().disable()
				.antMatcher("/staff/**").authorizeRequests()
				.antMatchers("/staff/**")
						.hasAnyAuthority(RoleEnum.ROLE_STAFF.name(), RoleEnum.ROLE_ADMIN.name())
						// cau hinh giao dien
						.and().formLogin().loginPage("/login-admin").loginProcessingUrl("/admin/login-adminUrl")
						.defaultSuccessUrl("/staff/index", true).failureUrl("/login-admin?e=error").and().logout()
						.logoutUrl("/admin/logout").logoutSuccessUrl("/login-admin").permitAll()
						// exeption
						.and().exceptionHandling().accessDeniedPage("/login-admin?e=deny");
			}
		}


	}

	@Order(3)
	@Configuration
	public class ClientSecurity extends WebSecurityConfigurerAdapter {

		protected void configure(HttpSecurity http) throws Exception {
			System.out.println("authitencation called");
			// phan quyen trong trang client
			http.csrf().disable().authorizeRequests().antMatchers("/member/**").hasAnyRole("MEMBER").anyRequest()
					.permitAll()
					// cau hinh giao dien
					.and().formLogin().loginPage("/login-member").loginProcessingUrl("/login-memberURL")
					.successForwardUrl("/login-member").failureUrl("/login-member?e=error").and().logout()
					.logoutUrl("/logout").permitAll()
					// exeption
					.and().exceptionHandling().accessDeniedPage("/login-member?e=deny");
		}
	}
	
	@Override
	public void addResourceHandlers(ResourceHandlerRegistry registry) {
		registry.addResourceHandler("/image/**").addResourceLocations("file:" + com.do_an.utt.utils.FileStore.UPLOAD_FOLDER)
				.setCacheControl(CacheControl.maxAge(24 * 365, TimeUnit.HOURS).cachePublic());
		registry.addResourceHandler("/**").addResourceLocations("classpath:/static/")
				.setCacheControl(CacheControl.maxAge(2, TimeUnit.HOURS).cachePublic());
	}

}
