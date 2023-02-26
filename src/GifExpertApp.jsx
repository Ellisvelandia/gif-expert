import React, { useState } from "react";
import AddCategory from "./components/AddCategory";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch", "Dragon Ball"]);

  const onAddCategory = (newCategory) => {
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory
        onNewCategory={onAddCategory}
        // setCategories={setCategories}
      />

      <ol>
        {categories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;

// const apiKey = "C1khQe3Z7R1W2lfTO9myKeuShdqFYSGC";
//   const resp = await fetch(
//     `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
//   );
