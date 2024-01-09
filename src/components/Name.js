import React  from "react";
import "./Name.css";
export default function Name(){
    return (
        <div className="name-container">
            <h2 className="fullname">Austin Distel</h2>
            <h5 className="role">Frontend Developer</h5>
            <small className="website">
            <a
                className="websiteLink"
                href="https://www.austin.portfolio.app"
                target="_blank"
                rel="noopener noreferrer"
                >
                austin.portfolio.app
                </a>
            </small>
        </div>
    )
}