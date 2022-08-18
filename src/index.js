import React from "react";
import ReactDOM from "react-dom";

const currentDate = new Date();
const year = currentDate.getFullYear();

const listStyling = {
  color: "grey",
  lineHeight: "2rem",
  fontSize: "1.5rem",
  paddingTop: "2rem"
};

const space = {
  paddingTop: "2rem",
  paddingBottom: "4rem"
};

const img = "https://picsum.photos/200";

const linkStyle = {
  textDecoration: "underlined",
  color: "black"
};

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      {" "}
      Created by BHASKAR{" "}
    </h1>
    <p style={{ color: "blue" }}>
      {" "}
      Copyright {year}{" "}
      <a href="one.html" style={linkStyle}>
        click here
      </a>
    </p>

    <div className="list">
      <ul style={listStyling}>
        <li>abc</li>
        <li>abc</li>
        <li>abc</li>
        <li>abc</li>
      </ul>
    </div>

    <center>
      <div className="row" style={space}>
        <div className="col-lg-3 col-md-6">
          <img
            src="https://www.indianhealthyrecipes.com/wp-content/uploads/2022/02/veg-noodles-vegetable-noodles-recipe.jpg"
            alt=""
          />
        </div>
        <div className="col-lg-3 col-md-6">
          <img
            src="https://www.indianhealthyrecipes.com/wp-content/uploads/2022/02/veg-noodles-vegetable-noodles-recipe.jpg"
            alt=""
          />
        </div>
        <div className="col-lg-3 col-md-6">
          <img
            src="https://www.indianhealthyrecipes.com/wp-content/uploads/2022/02/veg-noodles-vegetable-noodles-recipe.jpg"
            alt=""
          />
        </div>

        <div className="col-lg-3 col-md-6">
          <img
            src="https://www.indianhealthyrecipes.com/wp-content/uploads/2022/02/veg-noodles-vegetable-noodles-recipe.jpg"
            alt=""
          />
        </div>
      </div>
    </center>

    <center>
      <img src={img} alt="" />
    </center>
  </div>,

  document.querySelector("#root")
);
