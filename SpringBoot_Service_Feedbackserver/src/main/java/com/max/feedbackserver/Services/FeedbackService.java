package com.max.feedbackserver.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.max.feedbackserver.Models.Feedback;
import com.max.feedbackserver.Repos.FeedbackRepo;

@Service
public class FeedbackService {
		@Autowired
		private FeedbackRepo repo;
		
		public Feedback addFeedback(Feedback feedback) {
			return repo.save(feedback);
		}
		public List<Feedback> viewFeedback() {
			return repo.findAll();
		}
		public String deleteFeedback(Long id) {
			repo.deleteById(id);
			return "deleted";
		}
		public int feedbackCount() {
			return repo.getFeedbackCount();
		}
}
