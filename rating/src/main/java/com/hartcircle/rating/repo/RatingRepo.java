package com.hartcircle.rating.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.hartcircle.rating.entity.Ratings;


@Repository
public interface RatingRepo extends JpaRepository<Ratings, Integer>{

    Optional<Ratings> findByPostIDAndRaterNIC(Integer postID, String raterNIC);

    @Query("SELECT AVG(r.rateValue) FROM Ratings r WHERE r.ownerNIC = :ownerNIC")
   Double findAverageRatingForUser(@Param("ownerNIC") String ownerNIC);

}
