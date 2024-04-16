import React, { useState } from "react";
import axios from "axios";
import { useAppContext } from "../contexts/AppContext.jsx";

const EditPostForm = ({ _id, quoteToEdit, setShowEdit }) => {
  const [quote, setQuote] = useState(quoteToEdit);

  const { fetchQuotes } = useAppContext();

  const handleChange = (e) => {
    setQuote(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.patch(`http://localhost:4000/posts/${_id}`, {
        quote: quote,
      });
      if (res.status === 200) {
        fetchQuotes();
        setShowEdit(false);
      }
    } catch (error) {
      console.error("Error editing post:", error);
    }
  };

  return (
    <form>
      <textarea
        name="quote"
        id="quote"
        cols="30"
        rows="10"
        value={quote}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Save changes</button>
    </form>
  );
};

export default EditPostForm;
