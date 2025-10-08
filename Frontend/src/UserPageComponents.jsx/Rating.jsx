import { useState, useEffect } from "react";
import axios from "axios";

function Rating(props) {
  const [rating, setRating] = useState(0); // user's selected rating
  const [hoverRating, setHoverRating] = useState(0); // for hover effect

  const submitRating = async (value) => {
    const token = localStorage.getItem("token");
    const doubleRating = parseFloat(value);
    try {
      await axios.post(
        `http://localhost:8086/api/v1/rating/rate/${props.itemId}`, // adjust endpoint as needed
        {
          ratingValue: doubleRating,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setRating(value); // update UI after successful submission
    } catch (error) {
      const errorMessage = error.response?.data;
      console.log("POST error:", errorMessage);

      if (errorMessage === "Rating Upload failed: You already rated this") {
        updateRating(doubleRating); // ✅ trigger PATCH directly
      } else {
        alert(errorMessage || "Failed to submit rating");
      }


    }
  };
  const updateRating = async (value) => {
    const token = localStorage.getItem("token");
    try {
      await axios.patch(
        `http://localhost:8086/api/v1/rating/updateRate/${props.itemId}`,
        { ratingValue: value },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setRating(value);
    } catch (patchError) {
      alert(patchError.response?.data || "Failed to update rating");
    }
  };


  useEffect(() => {
    if (
      props.item &&
      props.item.user &&
      props.item.user.myAvgRateValue !== undefined
    ) {
      setRating(props.item.user.myAvgRateValue);
    }
  }, [props.item]);

  return (
    <>
      <div className="mt-3">
        <h5>Rating for the post owner:</h5>
        <div className="d-flex">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              style={{
                cursor: "pointer",
                fontSize: "1.5rem",
                color: (hoverRating || rating) >= star ? "#ffc107" : "#e4e5e9",
              }}
              onMouseEnter={() => setHoverRating(star)}
              onMouseLeave={() => setHoverRating(0)}
              onClick={() => submitRating(star)}
            >
              ★
            </span>
          ))}
        </div>
      </div>
    </>
  );
}

export default Rating;
