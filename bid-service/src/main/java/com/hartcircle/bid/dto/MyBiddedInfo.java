package com.hartcircle.bid.dto;

import com.hartcircle.bid.dto.PostViewDto;


import java.sql.Date;
import java.sql.Time;

public class MyBiddedInfo {

    private Integer bidID;
    private Double biddedAmount;
    private Date mybidedDay;
    private Time myBidedTime;
    private PostViewDto post;


    public MyBiddedInfo() {
    }



    public PostViewDto getPost() {
        return post;
    }

    public void setPost(PostViewDto post) {
        this.post = post;
    }

    public Integer getBidID() {
        return bidID;
    }

    public void setBidID(Integer bidID) {
        this.bidID = bidID ;
    }

    public Double getBiddedAmount() {
        return biddedAmount;
    }

    public void setBiddedAmount(Double biddedAmount) {
        this.biddedAmount = biddedAmount;
    }

    public Date getMybidedDay() {
        return mybidedDay;
    }

    public void setMybidedDay(Date mybidedDay) {
        this.mybidedDay = mybidedDay;
    }

    public Time getMyBidedTime() {
        return myBidedTime;
    }

    public void setMyBidedTime(Time myBidedTime) {
        this.myBidedTime = myBidedTime;
    }



}
