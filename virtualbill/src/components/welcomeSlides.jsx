import React from "react";
import { UncontrolledCarousel } from "reactstrap";
import coffee from "../components/public/images/coffee.jpg";
import truck from "../components/public/images/truck.jpg";
import city from "../components/public/images/city.jpg";

const items = [
  {
    src: coffee,
    altText: "Supply chain management",
    caption: "",
    header: "Supply chain management",
    key: "1"
  },
  {
    src: truck,
    altText: "What we provide ?",
    caption: "",
    header: "What we provide ?",
    key: "2"
  },
  {
    src: city,
    altText: "Get started",
    caption: "",
    header: "Get started",
    key: "3"
  }
];

const welcome = () => <UncontrolledCarousel items={items} />;

export default welcome;
