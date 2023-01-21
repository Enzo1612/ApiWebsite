import React, { useState, useEffect } from "react";
import "./Activities.css";

function Activities() {
  function loadActivity() {
    fetch("https://www.boredapi.com/api/activity")
      .then((response) => response.json())
      .then((data) => {
        setActivities([...activities, data]);
        setIsLoading(false);
      });
  }

  const [activities, setActivities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadActivity();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function clearActivity() {
    setActivities([activities]);
  }

  function check(e) {
    if (e.target.style.textDecoration === "line-through") {
      e.target.style.textDecoration = "none";
    } else {
      e.target.style.textDecoration = "line-through";
    }
  }

  return (
    <div id="activityContainer">
      <h1 id="activityTitle">What can you do?</h1>
      <ul>
        {activities.map((activity) => {
          return (
            <li id={activity.key} className="activity" onClick={check}>
              {activity.activity}
            </li>
          );
        })}
      </ul>
      <div id="activityButtonDiv">
        <button
          disabled={isLoading}
          onClick={loadActivity}
          className="activityButton"
        >
          New Activity
        </button>
        <button
          disabled={activities.length === 0}
          onClick={clearActivity}
          className="activityButton"
        >
          Clear All
        </button>
      </div>
    </div>
  );
}

export default Activities;
