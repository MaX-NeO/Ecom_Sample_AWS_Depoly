package com.max.feedbackserver.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.max.feedbackserver.Models.Feedback;
import com.max.feedbackserver.Services.FeedbackService;

@RestController
@RequestMapping("/feedback")
@CrossOrigin("*")
public class FeedbackController {

	@Autowired 
	FeedbackService service;
	
	@GetMapping("/get")
	public List<Feedback> ViewFeedback() {
		return service.viewFeedback();
	}
	@PostMapping("/add")
	public Feedback AddFeedback(@RequestBody Feedback feedback) {
		return service.addFeedback(feedback);
	}
	@DeleteMapping("/delete/{id}")
	public String DeleteFeedback(@PathVariable Long id) {
		return service.deleteFeedback(id);
	}
	@GetMapping("/getcount")
	public int FeedbackCount() {
		return service.feedbackCount();
	}
}
