/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import CardWidget from "./CardWidget";
import { NavLink } from 'react-router-dom'



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
        <NavLink class="nav-link" to="/">Home</NavLink>
      </li>
      <li class="nav-item">
        <NavLink class="nav-link" to="/categoria/:categoriaId">Features</NavLink>
      </li>
      <li class="nav-item">
        <NavLink class="nav-link" to="/categoria">Pricing</NavLink>
      </li>
      <CardWidget/>
    </ul>
  </div>
</nav>
  </>
)
}