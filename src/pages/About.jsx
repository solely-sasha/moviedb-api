import React from "react";

export default function About() {
  return (
    <div className="background-color">
      <h1>About the Popular Movies App</h1>
      <p>
        This app was created to help users discover the most popular movies.
      </p>
      <p>
        Popular Movies are calculated from TMDB based on internal algorithms
        that consider factors like:
        <ol>
          <li>
            <strong>User Ratings:</strong> Movies with high average ratings from
            users.
          </li>
          <li>
            <strong>Number of Votes:</strong> The number of user votes a movie
            has received.
          </li>
          <li>
            <strong>Current Trends:</strong> Movies with recent spikes in user
            activity.
          </li>
          <li>
            <strong>Release Dates:</strong> Often weighted to favor recent
            releases.
          </li>
          <li>
            <strong>Box Office Performance:</strong> Revenue can also play a
            role.
          </li>
        </ol>
      </p>
    </div>
  );
}
