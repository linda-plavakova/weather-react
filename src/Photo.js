import React from "react";

import Picture from "./Rain.jpg";

export default function Photo() {
  return (
    <div>
      <img src={Picture} className="main-photo" alt="Happy Rain" />
    </div>
  );
}
