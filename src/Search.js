import React from "react";
import axios from "axios";

export default function Search() {
  return (
    <div>
      <form>
        <input
          type="text"
          name="city"
          id="search-form"
          className="form-control"
          placeholder="Enter city "
          autoComplete="off"
        />
        <container className="buttons">
          <button type="submit" class="btn btn-primary">
            {" "}
            Show weather
          </button>
          <button class="btn btn-primary buttons" id="locate-btn">
            {" "}
            Locate me{" "}
          </button>
        </container>
      </form>
    </div>
  );
}
