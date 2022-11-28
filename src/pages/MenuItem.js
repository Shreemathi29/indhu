import React from "react";

function MenuItem({ image, name, author, price, year, publisher }) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> Name: {name} </h1>
      <h1> Author:  {author} </h1>
      <p>  Price:  ${price} </p>
      <h1> Published Year: {year} </h1>
      <h1>Publication: {publisher} </h1>

    </div>
  );
}

export default MenuItem;
