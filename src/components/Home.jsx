import React from "react";
import { useState, useEffect } from "react";

function Home(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((result) => {
        // console.log(result);
        setData(result);
      });
  }, []);
  return (
    <div>
      {!props.isLoggedIn ? "Please Login" : "Welcome Back!"}
      <div className="row">
        {data.map((item) => (
          <div className="col-md-3">
            <div class="card" style={{ width: "18rem" }}>
              <img
                src={item.image}
                class="card-img-top"
                alt=""
                height="300"
                width="200"
              />
              <div class="card-body">
                <h5 class="card-title">{item.title}</h5>
                <p class="card-text">{item.description}</p>
                <a href="#" class="btn btn-primary">
                  Cart
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
