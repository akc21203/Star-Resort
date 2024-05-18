import React from "react";
import Heading from "../components/common/Heading";
import Book from "../components/home/Book";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

export default function Booking() {
  return (
    <>
    <Header/>
      <Heading heading="Booking" title="Home"subtitle="Booking" />
      <Book/>
      <Footer/>
    </>
  );
}