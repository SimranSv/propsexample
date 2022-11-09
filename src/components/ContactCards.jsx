import React from "react";

function ContactCards(props) {
  return (
    <div>
      <div className="card">
        <div className="top">
          <h2 className="name">{props.name}</h2>
          <img className="circle-img" src={props.pic} alt="avatar_img" />
        </div>
        <div className="bottom">
          <p>{props.tell}</p>
          <p>b@beyonce.com</p>
        </div>
      </div>
    </div>
  );
}

export default ContactCards;
