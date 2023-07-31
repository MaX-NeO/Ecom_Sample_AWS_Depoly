package com.max.feedbackserver.Repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.max.feedbackserver.Models.Feedback;

public interface FeedbackRepo extends JpaRepository<Feedback, Long> {
    @Query(value = "SELECT COUNT(*) FROM feedback", nativeQuery = true)
    int getFeedbackCount();
}
