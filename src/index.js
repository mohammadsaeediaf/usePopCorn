import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";

import StarRating from "./starRating";
const root = ReactDOM.createRoot(document.getElementById("root"));
function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating
        maxRating={10}
        color="blue"
        onSetRating={setMovieRating}
        defaultRating={1}
      />
      <p>This movie was rated {movieRating} star</p>
    </div>
  );
}

root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating maxRating={5} />
    <StarRating
      maxRating={5}
      color="red"
      size={36}
      messages={["terrible", "bad", "okay", "good", "Amazing"]}
    />
    <Test />
  </React.StrictMode>
);
