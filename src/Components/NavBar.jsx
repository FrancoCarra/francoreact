/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import CardWidget from "./CardWidget";




 export const NavBar = () => {
return (
  <>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">NOSEQUENOMBREPONER</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      <CardWidget/>
    </ul>
  </div>
</nav>
  </>
)
}