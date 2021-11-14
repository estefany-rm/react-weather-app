import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-6">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-2">
            <input
              type="submit"
              value="search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <h1>Amsterdam</h1>
      <ul>
        <li>Last updated: Sunday 17:50 </li>
        <li>Broken clouds</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
            alt="cloudy"
          />

          <span className="temperature">8</span>
          <span className="unit">°C</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 17%</li>
            <li>Humidity: 67%</li>
            <li>Wind: 13 Km/hr</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
