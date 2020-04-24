import React from "react";

const Header = ({ title }) => {
  return (
    <div className="header-container">
      <div className="header-nav">
        <div className="left-nav">
          <div className="search-container">
            <input
              className="search-input"
              type="search"
              autoComplete="off"
              autoCorrect="off"
              spellCheck="false"
            />
            <span className="search-btn-container">
              <label className="search-btn">
                <span className="search-btn-icon" />
              </label>
            </span>
          </div>
          <a href="/" className="left-nav-item hide">
            Home
          </a>
        </div>
        <div className="logo-nav">
          <span className="logo-nav-icon" />
          <span className="logo-nav-img" />
        </div>
        <div className="right-nav">
          <a href="/signup" className="right-nav-btn green">
            Sign Up
          </a>
          <a href="/Login" className="right-nav-btn">
            Login
          </a>
        </div>
      </div>
      <div className="header-title" />
    </div>
  );
};

export default Header;
