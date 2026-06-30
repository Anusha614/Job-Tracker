import React from "react";
import { Link } from "react-router-dom";


export default function Home () {
    return(
    <div
  className="hero min-h-screen"
  style={{
    backgroundImage:
      "url(https://images.pexels.com/photos/9831081/pexels-photo-9831081.jpeg)",
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">LockedIn</h1>
      <p className="mb-5">
        Job hunting is a mess, but your tracking doesn't have to be. Stay focused, stay organized, stay LockedIn.
      </p>
      <Link to={`/sign-up`} className="btn btn-sm btn-outline">
    Get started
</Link>
    </div>
  </div>
</div>
    )
}