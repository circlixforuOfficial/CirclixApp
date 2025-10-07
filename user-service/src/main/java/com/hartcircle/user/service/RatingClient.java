package com.hartcircle.user.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class RatingClient {


    @Value("${rating.service.url}")
    private String ratingServiceUrl;

    @Autowired
    private RestTemplate restTemplate;

    public Double getUserRating(String nic) {
        try {
            String url = ratingServiceUrl + "/api/v1/rating/ratingavg/" + nic;

            ResponseEntity<Double> response = restTemplate.getForEntity(url, Double.class);

            return response.getBody();
        } catch (Exception e) {
            throw new RuntimeException("Unable to fetch user rating for NIC: " + nic, e);
        }

    }
}
