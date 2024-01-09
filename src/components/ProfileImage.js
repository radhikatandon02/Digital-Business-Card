import React  from "react";
import image from "../profileImage.jpg";
import "./ProfileImage.css";
export default function ProfileImage(){
    return (
        // eslint-disable-next-line jsx-a11y/alt-text
        <img src={image} className="image" alt="austin distel"/>
    )
}