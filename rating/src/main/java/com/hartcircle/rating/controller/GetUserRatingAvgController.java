package com.hartcircle.rating.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import com.hartcircle.rating.repo.RatingRepo;

@RestController
@RequestMapping("/api/v1/rating")
public class GetUserRatingAvgController {

    @Autowired
    private RatingRepo ratingRepo;

    @GetMapping("/ratingavg/{userNic}")
    public ResponseEntity<Double> getUserRatingAvg(@PathVariable("userNic") String userNic) {

        Double ratingAvg = 0.0;
        try {
            if (ratingRepo.findAverageRatingForUser(userNic) == null) {
                ratingAvg = 0.0;
            } else {
                ratingAvg = ratingRepo.findAverageRatingForUser(userNic);
            }

        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No ratings available");
        }
        return ResponseEntity.ok(ratingAvg);
    }

}
