import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
<html>
<head>
  <title>Navigation Bar</title>
  <link rel="stylesheet" href="navigation.css"/>
</head>
<body>
  <div class="nav-container">
    <h1>C+K</h1>
    <div class="nav-item">OUR STORY</div>
    <div class="nav-item">PHOTOS</div>
    <div class="nav-item">GROOMSMEN</div>
    <div class="nav-item">BRIDESMAIDS</div>
    <div class="nav-item">GIFTS</div>
    <div class="nav-item">RSVP</div>
  </div>

  <script src="navigation.js"></script>
</body>
</html>
    )
}

export default Navbar