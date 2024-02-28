import React from "react";

function Results({ highestStreak }) {
  console.log(highestStreak);
  return (
    <div>
      <p>{highestStreak}</p>
    </div>
  );
}

export default Results;
