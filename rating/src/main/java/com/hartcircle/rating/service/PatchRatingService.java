package com.hartcircle.rating.service;

import org.jetbrains.annotations.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hartcircle.rating.dto.RatingDTO;
import com.hartcircle.rating.entity.Ratings;
import com.hartcircle.rating.repo.RatingRepo;

@Service
public class PatchRatingService {

    @Autowired
    private RatingRepo ratingRepo;
    @Autowired
    private UserClient userClient;

    public void updateRatesForPosts(String raterNIC, int postID, @NotNull RatingDTO ratingDTO, String authHeader) {
        // Check Rater exists
        if (!userClient.userExists(raterNIC)) {
            throw new RuntimeException("User not found");
        }

        // Find existing rating
        Ratings existingRating = ratingRepo.findByPostIDAndRaterNIC(postID, raterNIC)
                .orElseThrow(() -> new RuntimeException("No existing rating found to update"));

        // Save new rating(I can Rate my own posts also)
        existingRating.setRateValue(ratingDTO.getRatingValue());

        ratingRepo.save(existingRating);
    }
}
