package com.example.mycontroller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class maincontroller {
	@GetMapping("/")
	public String viewhome() {
		return "index";
	}
	
	@GetMapping("/consultancy")
	public String viewconsultancy() {
		return "consultancy";
	}
	
	 @GetMapping("/terms")
	    public String termsPage() {
	        return "terms"; // maps to terms.html in /templates
	    }
	 
	 @GetMapping("/terms-redirect")
	 public String redirectToContact() {
	     return "redirect:/#contact";
	 }
}


   

