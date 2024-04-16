import React, { useState, useEffect } from "react";
import axios from "axios";

const BookInfo = ({ bookInfo, page }) => {
  const [bookData, setBookData] = useState("");
  console.log("bookData:", bookData);
  useEffect(() => {
    const fetchBookData = async () => {
      try {
        const id = bookInfo;
        const res = await axios.get(`http://localhost:4000/books/${id}`);
        const data = res.data;
        console.log("data:", data);
        setBookData(data);
      } catch (error) {
        console.log("Error fetching book data:", error);
      }
    };
    fetchBookData();
  }, []);
  return (
    <div>
      <h4>{bookData.title}</h4>
      <img src={bookData.avatar} alt="Bok Cover" />
      <p>Page: {page}</p>
    </div>
  );
};

export default BookInfo;
