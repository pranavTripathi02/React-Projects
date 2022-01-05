import React from "react";
import { ProductConsumer } from "../context";

export default function SearchForm() {
  const { setSearchTerm } = ProductConsumer();
  return <div></div>;
}
