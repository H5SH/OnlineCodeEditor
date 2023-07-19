package com.example.code;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.boot.autoconfigure.web.servlet.error.ErrorMvcAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.GetMapping;




@EnableAutoConfiguration(exclude = {ErrorMvcAutoConfiguration.class})
@EntityScan("com.example.code.Model")
@ComponentScan("com.example.code")
@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class}, scanBasePackages = ("resorece.template.html"))
public class CodeApplication {

	public static void main(String[] args) {
		SpringApplication.run(CodeApplication.class, args);
	}

	@GetMapping
	public String index(){
		return "index";
	}


}

