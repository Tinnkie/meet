import React from "react";
import './WelcomeScreen.css';

function WelcomeScreen(props) {
  return props.showWelcomeScreen ? (
    <div className="WelcomeScreen">
      <h1>Welcome to the Meet app</h1>
      <h4>
        Log in to see upcoming events around the world for full-stack developers
      </h4>
      <div className="button-cont">
        <div className="google-btn">
          <div className="google-icon-wrapper">
            <img
              className="google-icon"
              src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
              alt="Google sign-in"
            />
          </div>
          <button
            onClick={() => { props.getAccessToken(); }}
            className="btn-text"
          >
            <b>Sign in with Google</b>
          </button>
        </div>
      </div>
      <a
        href="https://tinnkie.github.io/meet/privacy.html"
        className="privacy-policy-link"
        rel="nofollow noopener"
      >
        Privacy policy
      </a>
    </div>
  ) : null;
}

export default WelcomeScreen;
