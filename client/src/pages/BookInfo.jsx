import React, { useState, useEffect } from "react";
import axios from "axios";

const BookInfo = ({ bookInfo }) => {
  const [bookData, setBookData] = useState(null);
  useEffect(() => {
    const fetchBookData = async () => {
      try {
        const id = bookInfo;
        const res = axios.get(`http://localhost:4000/books/${id}`);
      } catch (error) {
        console.log("Error fetching book data:", error);
      }
    };
  }, []);
  return <div>{bookInfo}</div>;
};

export default BookInfo;
