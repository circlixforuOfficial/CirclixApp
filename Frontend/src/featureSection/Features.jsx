import React from "react";
import "./Icons/feature.css";
import FeatureCard from "./FeatureCard";

import search from "./Icons/search.svg";
import time from "./Icons/stopwatch.svg";
import laptop from "./Icons/laptop.svg";
import security from "./Icons/icons8-cloud-firewall-48.png";
import taskCompletion from "./Icons/clipboard2-check-fill.svg";

function Features() {
  return (
    <>
      <div>
        <div className="container px-5 py-5" id="featured-3">
          <h2 id="scrollspyHeading2" className="display-4">Features</h2>
          <div className="row g-4 py-5 px-2 row-cols-1 row-cols-lg-3">
            <FeatureCard
              source={search}
              altText="search img"
              heading="Smart Search & Filters"
              description="A responsive search bar paired with category, price, and type
                filters helps users pinpoint relevant listings instantly.
                Includes sorting by newest, expiring bids, or donation tags."
            />
            <FeatureCard
              source={time}
              altText="stopwatch img"
              heading="Real-Time Updates"
              description="Circlix handles timed auctions with automatic expiration,
                highest-bid highlights, and notification alerts no manual
                tracking required."
            />
            <FeatureCard
              source={laptop}
              altText="laptop img"
              heading="Multi-device Access"
              description="Fully responsive layout ensures effortless use on smartphones,
                tablets, and desktops also clean typography and intuitive
                buttons make it beginner-friendly."
            />
            <FeatureCard
              source={security}
              altText="security img"
              heading="Security Features"
              description="The platform will be secure with password system and protect
                client data from unauthorized access. User can also report any
                issues or concerns to the support team and secure their password
                by using a strong password."
            />
            <FeatureCard
              source={taskCompletion}
              altText="money img"
              heading="Effortless Item Posting"
              description="Users can list items for sale or bidding in seconds using a
          streamlined form and drag and-drop image upload. Circlix
          auto-categorizes items to optimize discovery."
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Features;
