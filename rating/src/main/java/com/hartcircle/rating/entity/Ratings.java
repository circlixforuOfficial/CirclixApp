package com.hartcircle.rating.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Ratings {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;   // primary key

    @Column(nullable = false)
    private String raterNIC;   // Who gave the rating

    @Column(nullable = false)
    private String ownerNIC;   // Who owns the post

    @Column(nullable = false)
    private Integer postID;    // Which post is rated

    public Integer getId() {
        return this.id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getRaterNIC() {
        return this.raterNIC;
    }

    public void setRaterNIC(String raterNIC) {
        this.raterNIC = raterNIC;
    }

    public String getOwnerNIC() {
        return this.ownerNIC;
    }

    public void setOwnerNIC(String ownerNIC) {
        this.ownerNIC = ownerNIC;
    }

    public Integer getPostID() {
        return this.postID;
    }

    public void setPostID(Integer postID) {
        this.postID = postID;
    }

    public Double getRateValue() {
        return this.rateValue;
    }

    public void setRateValue(Double rateValue) {
        this.rateValue = rateValue;
    }

    @Column(nullable = false)
    private Double rateValue;  // Rating value


}
