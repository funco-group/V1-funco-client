package com.found_404.funco.global.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpHeaders;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig implements WebMvcConfigurer {
	@Override
	public void addCorsMappings(CorsRegistry registry) {
		registry.addMapping("/**")
			.allowedMethods("GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS")
			// .allowedOrigins("http://localhost:3000")
			.allowedOrigins("*")
			.allowedHeaders("*")
			.allowCredentials(false)
			.exposedHeaders(HttpHeaders.LOCATION);

	}
}
