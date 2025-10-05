package com.hartcircle.rating;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.client.RestTemplate;

@SpringBootApplication
@EntityScan(basePackages = "com.hartcircle.rating.entity")
@EnableJpaRepositories(basePackages = "com.hartcircle.rating.repo")
@ComponentScan(basePackages = "com.hartcircle.rating") 
public class RatingApplication {

	public static void main(String[] args) {
		SpringApplication.run(RatingApplication.class, args);
	}

	@Bean
    public RestTemplate restTemplate() {
		return new RestTemplate();
    }

}
