import { CardComponent } from "../components/CardComponent.js";
import { UserComponent } from "../components/UserComponent.js";
import { ProductComponent } from "../components/ProductComponent.js";
import { getData } from "../store/fetchApi.js";
let productRender = document.querySelector("#productRender");
let userRender = document.querySelector("#userRender")

// const BaseUrl = "http://127.0.0.1:5500///data/products.json";

// fetch(BaseUrl)
//   .then((a) => a.json())
//   .then((data) => {
//     let products = data.products;
//     products.map((product) => (cardRender.innerHTML += CardComponent(product)));
//   });
let products = await getData("products");
let users = await getData("users")
products.map(
  (product) => (productRender.innerHTML += ProductComponent(product))
);
users.map((user) => (userRender.innerHTML += UserComponent(user)));
