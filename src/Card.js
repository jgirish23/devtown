import React from "react";
function Card(props) {
  return (
    <div>
      <form>
        <img src={props.img}></img>
        <h3>{props.text}</h3>
        <button>image.png</button>
        <button>⭐</button>
        <a href="https://www.flaticon.com/free-icons/heart" title="heart icons">
          Heart icons created by Freepik - Flaticon
        </a>
      </form>
    </div>
  );
}

export default Card;
